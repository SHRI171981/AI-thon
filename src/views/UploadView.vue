<template>
  <div class="flex justify-center min-h-screen my-12">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Upload or Capture an Image</h1>

      <!-- Camera Live Feed Section -->
      <div
        class="w-fit h-fit border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center mb-6 overflow-hidden"
      >
        <video ref="videoElement" autoplay playsinline class="w-full h-full object-cover"></video>
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-2"
          @click="capturePhoto"
        >
          Capture Photo
        </button>
      </div>

      <!-- Captured Image Preview Section -->
      <div v-if="imageSrc" class="mt-6">
        <h2 class="text-xl font-bold mb-4">Captured Image:</h2>
        <img :src="imageSrc" alt="Captured" class="w-fit rounded-lg border" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoElement = ref(null);
const imageSrc = ref('');
let stream;

// Start Camera
const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.value.srcObject = stream;
  } catch (error) {
    console.error('Error accessing the camera:', error);
    alert('Unable to access the camera. Please check permissions.');
  }
};

// Capture Photo
const capturePhoto = () => {
  if (!videoElement.value) return;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = videoElement.value.videoWidth;
  canvas.height = videoElement.value.videoHeight;

  // Draw video frame to canvas
  context.drawImage(videoElement.value, 0, 0, canvas.width, canvas.height);

  // Convert canvas to image and display
  imageSrc.value = canvas.toDataURL('image/png');
};

onMounted(() => {
  startCamera();
});
</script>
