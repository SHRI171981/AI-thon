
<template>
  <div class="sticky top-0 flex">
    <div class="justify-start w-2/12 font-bold text-3xl pl-10 bg-white pt-2 pb-2">
        <div>
          AI Assistant
        </div>
    </div>
    <div class="flex w-full justify-end bg-white pr-10">
      <RouterLink :to="{name:'home'}" active-class="active">
        <NavItem -name="Home"/>
      </RouterLink>
      <RouterLink :to="{name:'upload'}" active-class="active">
        <NavItem -name="Upload"/>
      </RouterLink>
      <RouterLink :to="{name:'result'}" active-class="active">
        <NavItem -name="Results"/>
      </RouterLink>
      <RouterLink :to="{name:'setting'}" active-class="active">
        <NavItem -name="Settings"/>
      </RouterLink>
      <RouterLink :to="{name:'about'}" active-class="active">
        <NavItem -name="About"/>
      </RouterLink>
    </div>
  </div>


</template>


<script setup>
import NavItem from '@/components/nav/NavItem.vue';

import { RouterLink } from 'vue-router';

</script>

<style scoped>
.active{
  @apply border-b border-slate-800 text-xl
  /* border-bottom: 1px solid darkblue; */
}
</style>
