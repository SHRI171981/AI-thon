<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Upload an Image or Paste Text</h1>

    <!-- Camera Capture Section -->
    <div v-if="!imageCaptured" class="w-96 h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center mb-6">
      <video ref="video" class="w-full h-full" autoplay></video>
      <button @click="captureImage" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-2">Capture</button>
    </div>
    
    <!-- Display Captured Image -->
    <div v-else class="w-96 h-40 border border-gray-300 rounded-lg flex flex-col items-center justify-center mb-6">
      <img :src="capturedImage" class="w-full h-full object-cover" />
      <button @click="retakeImage" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-2">Retake</button>
    </div>
    
    <!-- Text Input Section -->
    <div class="w-96 h-28 border border-gray-300 rounded-lg flex flex-col items-center justify-center mb-6">
      <p class="text-gray-500 mb-2">Paste or type text here...</p>
      <span class="text-gray-800 text-4xl">
        <Mic />
      </span>
    </div>
    
    <!-- Read Aloud Button -->
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center mx-auto">
      <span class="mr-2">🔊</span> Read Aloud
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Mic } from 'lucide-vue-next';

const video = ref(null);
const imageCaptured = ref(false);
const capturedImage = ref(null);

// Start camera
onMounted(() => {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.value.srcObject = stream;
  });
});

// Capture image
const captureImage = () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = video.value.videoWidth;
  canvas.height = video.value.videoHeight;
  context.drawImage(video.value, 0, 0, canvas.width, canvas.height);
  capturedImage.value = canvas.toDataURL('image/png');
  imageCaptured.value = true;

  validateImage();
};

// Image validation logic
const validateImage = () => {
  const isValid = Math.random() > 0.5; // Simulated validation check
  if (!isValid) {
    speakMessage("Image is not good. Say 'retake' to capture again.");
  }
};

// Retake image
const retakeImage = () => {
  imageCaptured.value = false;
  capturedImage.value = null;
};

// Voice feedback
const speakMessage = (message) => {
  const speech = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(speech);
};
</script>

