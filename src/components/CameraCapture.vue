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

  speechRecognition.onresult = (event

