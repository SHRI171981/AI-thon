<template>
  <div class="flex justify-center min-h-screen pt-4">
    <div class="text-center">
      <!-- Heading -->
      <h1 class="text-4xl font-bold text-gray-800 mb-6">Results</h1>

      <!-- Results Container -->
      <div class="flex justify-center gap-6 mb-6">
        <!-- Result Box -->
        <div class="w-96 h-60 bg-gray-200 rounded-lg"></div>

        <!-- Image Preview -->
        <div class="w-60 h-40 bg-gray-200 rounded-lg">
          <p class="text-gray-500 text-sm p-2">Uploaded Image Preview</p>
        </div>
      </div>

      <!-- Read Aloud Button -->
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center mb-6 mx-auto text-xl">
        <span class="mr-2">🔊</span> Read Aloud
      </button>

      <!-- Action Buttons -->
      <div class="flex justify-center gap-8 mb-8 text-xl">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg flex items-center">
          Copy
          <span class="ml-2">
            <Copy />
          </span>
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg flex items-center text-xl">
          Download
          <span class="ml-2">
            <Download />
          </span>
        </button>
      </div>

      <!-- Process Another Image Button -->
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-xl">
        Process Another Image
      </button>
    </div>
  </div>
</template>

<script setup>
import { Copy } from 'lucide-vue-next';
import { Download } from 'lucide-vue-next';
</script>
