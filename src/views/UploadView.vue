<template>
  <div class="flex justify-center min-h-screen my-12">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Upload an Image or Paste Text</h1>

      <!-- Image Upload Section -->
      <div
        class="w-96 h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center mb-6 cursor-pointer hover:border-blue-500"
      >
        <p class="text-gray-500 mb-2">Drag & Drop an image here or <span class="text-blue-500">Click to Upload</span></p>
        <span class="text-gray-800 text-4xl pt-2">
          <Upload />
        </span>
      </div>

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
import { Upload } from 'lucide-vue-next';
import { Mic } from 'lucide-vue-next';
</script>
