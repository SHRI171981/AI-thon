<template>
    <div class="flex items-center justify-center min-h-screen">
      <div class="grid grid-cols-1 text-center place-content-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">AI ACCESSIBILITY ASSISTANT</h1>
        <p class="text-gray-600 mb-8">
          Helping visually impaired users read and understand images, text, and audio.
        </p>
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg flex items-center w-5/12 mx-auto text-xl"
          >
            <span class="mr-2">
              <Mic/>
            </span>
            GET STARTED
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { Mic } from 'lucide-vue-next';
</script>
