<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div class="app">

    <header class="p-4  dark:text-gray-100">
      <RouterLink to="/" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">/</RouterLink>
      <RouterLink to="/about" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About
      </RouterLink>
    </header>

    <RouterView />

  </div>
</template>

<style >
.app {
  text-align: center;
}
</style>
