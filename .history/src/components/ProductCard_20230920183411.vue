<template>
    <div class="rounded shadow-md dark:text-gray-100 border-red-600">
        <div class="p-10">
            <img :src="product.image" :alt="product.title + ' image'"
                class="object-scale-down object-center w-full max-h-72 mx-auto rounded-t-md dark:bg-white m-8" />
        </div>

        <div class="flex flex-col justify-between p-6 space-y-8">
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 truncate">{{ product.title }}</h2>
                <p class="text-gray-400">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
            </div>
            <div class="flex flex-row">

                <div class="flex flex-col justify-start dark:text-gray-500 w-8/12">
                    <p class="text-sm">test</p>
                    <p class="text-sm">test</p>
                </div>
                <div>
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
  