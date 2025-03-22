<template>
  <div class="flex mt-6 justify-center min-h-screen">
    <div class="text-center">
      <!-- Heading -->
      <h1 class="text-4xl font-bold text-gray-800 mb-4">About AI Accessibility Assistant</h1>

      <!-- Description -->
      <p class="text-gray-600 mb-8">
        AI Accessibility Assistant is designed to help visually impaired users understand
        images, text, and audio by using advanced AI technology.
      </p>

      <!-- How it Works Section -->
      <h2 class="text-xl font-semibold text-gray-700 mb-4">How it works</h2>
      <div class="mb-8">
        <div class="mb-6">
          <p class="text-gray-700">1. Upload an image or type text</p>
          <span class="text-3xl">
            <Upload class="mx-auto mt-2"/>
          </span>
        </div>
        <div class="mb-6">
          <p class="text-gray-700">2. AI processes the content</p>
          <span class="text-3xl">
            <Loader class="mx-auto mt-2"/>
          </span>
        </div>
        <div>
          <p class="text-gray-700">3. Listen to the output</p>
          <span class="text-3xl">
            <Volume2 class="mx-auto mt-2"/>
          </span>
        </div>
      </div>

      <!-- Support Info -->
      <p class="text-gray-500 mb-6">
        Need help? Contact our support team at <a href="mailto:support@example.com" class="text-blue-500">support@example.com</a>.
      </p>

      <!-- Back to Home Button -->
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center mx-auto">
        <span class="mr-2">⬅️</span> Back to Home
      </button>
    </div>
  </div>
</template>

<script setup>
import { Loader } from 'lucide-vue-next';
import { Upload } from 'lucide-vue-next';
import { Volume2 } from 'lucide-vue-next';
</script>
