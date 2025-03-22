<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/nav/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar/>
  <div>
    <RouterView/>
  </div>
</template>
