<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen">
    <!-- Camera Stream -->
    <video v-if="!capturedImage" ref="videoElement" class="w-full max-w-md rounded-lg" autoplay></video>
    <canvas ref="canvasElement" class="hidden"></canvas>
    
    <!-- Captured Image -->
    <div v-if="capturedImage" class="mt-4">
      <img :src="capturedImage" class="rounded-lg w-full max-w-md" />
      <button @click="retakeImage" class="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">Retake</button>
    </div>
    
    <!-- Capture Button -->
    <button v-if="!capturedImage" @click="capture" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Capture
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const videoElement = ref(null);
const canvasElement = ref(null);
const capturedImage = ref(null);
let speechRecognition = null;

// Start Camera
onMounted(() => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      videoElement.value.srcObject = stream;
      videoElement.value.play();
    })
    .catch((error) => console.error("Camera access denied:", error));
});

// Capture Image
const capture = () => {
  const ctx = canvasElement.value.getContext("2d");
  canvasElement.value.width = videoElement.value.videoWidth;
  canvasElement.value.height = videoElement.value.videoHeight;
  ctx.drawImage(videoElement.value, 0, 0);
  const imageData = canvasElement.value.toDataURL("image/png");

  if (isImageGood(imageData)) {
    capturedImage.value = imageData; // Show image if valid
  } else {
    speak("Image is not good. Do you want to retake it?");
    listenForRetake();
  }
};

// Validate Image
const isImageGood = (imageData) => {
  return imageData.length > 5000; // Example check (adjust as needed)
};

// Voice Output
const speak = (message) => {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
};

// Listen for "Retake"
const listenForRetake = () => {
  speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  speechRecognition.lang = "en-US";
  speechRecognition.start();

  speechRecognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    if (command.includes("retake")) {
      retakeImage();
    }
  };
};

// Retake Image
const retakeImage = () => {
  capturedImage.value = null;
  videoElement.value.play();
};
</script>
