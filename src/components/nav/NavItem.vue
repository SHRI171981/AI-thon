
<template>
  <div class="
  h-12 w-24
  text-center content-center
  ml-1 mr-1
   text-slate-950 font-bold
   hover:bg-gray-300">
    {{ props.Name }}
  </div>
</template>


<script setup>

import { defineProps } from 'vue';
const props = defineProps(['Name'])
</script>
