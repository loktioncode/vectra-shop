<template>
    <!-- Card Container -->
    <div class="mt-2 hover:border hover:border-gray-200 border-rounded-t">

        <!-- Image Container with Background Color -->
        <div class=" lg:px-0 px-4">

            <!-- Apply adjustments only for mobile devices -->
            <img :src="product.images[0]" :alt="product.title + ' image'"
                class="md:object-cover md:object-center w-full mx-auto rounded-t dark:bg-white " />
        </div>
        <!-- lg:bg-red-700 md:bg-blue-700 sm:bg-yellow-900 -->
        <!-- Content Container -->
        <div class="flex flex-col p-2 space-y-4 ">
            <div>
                <h2 class="lg:text-xl sm:text-md md:font-semibold text-gray-800 md:w-full">{{ product.title }}</h2>
                <div class="flex justify-start">
                    <p class="text-gray-400 ">{{ product.category.name }}</p>

                </div>
            </div>
            <div class="flex flex-row  justify-between items-center">
                <div class="flex justify-start dark:text-gray-500 w-full sm:w-8/12">
                    <div class="flex flex-col">
                        <p class="text-sm">test</p>
                        <p class="text-sm">test</p>
                    </div>

                </div>
                <div class="w-auto md:w-full mt-4 md:mt-0">
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
  