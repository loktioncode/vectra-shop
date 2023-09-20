<template>
    <div class=" roundedshadow-md  dark:text-gray-100">

        <img :src="product.image" :alt="product.title + 'image'"
            class="object-scale-down object-center w-full rounded-t-md h-72 dark:bg-white" />
        <div class="flex flex-col justify-between p-6 space-y-8">
            <div class="space-y-2">
                <h2 class="text-3xl font-semibold text-gray-800">{{ product.title }}</h2>
                <p class="text-gray-400">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
            </div>
            <div class="flex flex-row">
             
                <div
                    class="flex flex-col space-x-2 dark:text-gray-100">

                </div>
                <button type="button"
                class="flex items-center justify-center w-full p-3 font-semibold tracki rounded dark:bg-gray-400 dark:text-gray-900">Read
                more</button>
            </div>
        
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { product } = defineProps<{ product: any }>();
</script>