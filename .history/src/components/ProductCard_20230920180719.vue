<template>
    <div class=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src="https://source.unsplash.com/random/300x300/?2" alt=""
            class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
            <img :src="product.image" :alt="product.title + 'image'" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div class="flex flex-col justify-between p-6 space-y-8">
            <div class="space-y-2">
                <h2 class="text-3xl font-semibold tracki">{{ product.title }}</h2>
                <p class="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
            </div>
            <button type="button"
                class="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read
                more</button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { product } = defineProps<{ product: any }>();
</script>