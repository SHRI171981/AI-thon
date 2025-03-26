<template>
  <div class="flex justify-center min-h-screen my-12">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Upload an Image or Paste Text</h1>

      <!-- Camera Component -->
      <div
        class="w-96 h-40 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center mb-6 bg-gray-200"
      >
        <CameraCapture ref="cameraRef" />
      </div>

      <!-- Capture Button -->
      <button
        @click="captureImage"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center mx-auto mb-6"
      >
        Capture
      </button>

      <!-- Text Input Section -->
      <div
        class="w-96 h-28 border border-gray-300 rounded-lg flex flex-col items-center justify-center mb-6"
      >
        <p class="text-gray-500 mb-2">Paste or type text here...</p>
        <span class="text-gray-800 text-4xl">
          <Mic />
        </span>
      </div>

      <!-- Read Aloud Button -->
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center mx-auto"
      >
        <span class="mr-2">🔊</span> Read Aloud
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Mic } from 'lucide-vue-next';
import CameraCapture from '@/components/CameraCapture.vue';

const cameraRef = ref(null);

const captureImage = () => {
  if (cameraRef.value?.capture) {
    cameraRef.value.capture(); // Call the capture function exposed from CameraCapture.vue
  } else {
    console.error("Capture function not found in CameraCapture.vue");
  }
};
</script>
