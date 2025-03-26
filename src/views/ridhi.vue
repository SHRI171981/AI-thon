<template>
  <div>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
    <ReadNews />
  </div>
</template>

<script>
import ReadNews from '@/components/ReadNews.vue';

export default {
  components: {
    ReadNews
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style scoped>
/* Add any styles you need here */
</style>
