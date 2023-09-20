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
        <div class="flex flex-col md:px-2">
            <div class="flex justify-start">
                <div class="flex flex-col">
                    <h2 class="lg:text-xl sm:text-md md:font-normal text-gray-800 md:w-full sm:pt-2">{{ product.title }}
                    </h2>
                    <p class="text-gray-400 text-start ">{{ product.category.name }}</p>
                </div>
            </div>
            <div class="flex flex-row ">
                <div class="flex justify-start dark:text-gray-500 w-full sm:w-8/12">
                    <div class="flex flex-col">
                        <p class="text-sm">test</p>
                        <p class="text-sm">test</p>
                    </div>

                </div>
                <div class="w-8/12 mt-4 md:mt-0">
                    <button type="button"
                        class="flex items-center justify-center w-full py-2 px-1  tracking-tight rounded dark:bg-gray-400 dark:text-gray-900">
                        View
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
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
  