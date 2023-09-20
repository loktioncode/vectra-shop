<template>
    <div class="rounded shadow-md dark:text-gray-100 border-red-600">
      <div>
        <img :src="product.image" :alt="product.title + ' image'"
          class="xl:object-scale-down  object-center w-full max-h-72 mx-auto rounded-t-md dark:bg-white m-8" />
      </div>
  
      <div class="flex flex-col justify-between p-6 space-y-0">
        <div>
          <h2 class="text-3xl font-semibold text-gray-800 truncate">{{ product.title }}</h2>
          <p class="text-gray-400">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
        </div>
        <div class="flex flex-row flex-wrap justify-between items-center">
          <div class="flex flex-col justify-start dark:text-gray-500 w-full md:w-8/12">
            <p class="text-sm">test</p>
            <p class="text-sm">test</p>
          </div>
          <div class="w-full md:w-auto mt-4 md:mt-0">
            <button type="button"
              class="flex items-center justify-center w-full p-3 font-semibold tracking-tight rounded dark:bg-gray-400 dark:text-gray-900">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
<script setup lang="ts">
import { defineProps } from 'vue';

const { product } = defineProps<{ product: any }>();
</script>
  