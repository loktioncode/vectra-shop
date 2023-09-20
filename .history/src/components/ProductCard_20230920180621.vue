<template>
    <!-- <div class=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src="https://source.unsplash.com/random/300x300/?2" alt=""
            class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
        <div class="flex flex-col justify-between p-6 space-y-8">
            <div class="space-y-2">
                <h2 class="text-3xl font-semibold tracki">{{ product.title }}</h2>
                <p class="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
            </div>
            <button type="button"
                class="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read
                more</button>
        </div>
    </div> -->
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.image" :alt="product.title + 'image'" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { product } = defineProps<{ product: any }>();
</script>