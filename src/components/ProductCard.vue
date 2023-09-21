<template>
    <!-- Card Container -->
    <div class="mt-2 hover:border hover:border-gray-200 border-rounded-t p-2 relative">

        <!-- "Sale" Div -->
        <div v-if="product.price <= 480" class="absolute top-2 left-2 bg-red-500 text-white py-2 px-4 rounded">SALE !</div>

        <!-- Card Content Container -->
        <div class="">

            <!-- Image Container with Background Color -->
            <div>

                <!-- Apply adjustments only for mobile devices -->
                <img :src="product.images[0] || product.images[1]" :alt="product.title + ' image'"
                    class="md:object-cover md:object-center w-full mx-auto rounded-t dark:bg-white " />
            </div>

            <!-- Content Container -->
            <div class="flex flex-col md:px-2">
                <div class="flex justify-start">
                    <div class="flex flex-col justify-start">
                        <h2 class="text-md md:text-xl font-bold md:font-medium text-gray-800 w-full pt-2">{{ product.title }}
                        </h2>
                        <p class="text-sm md:text-lg text-gray-400 text-start font-light md:font-medium">{{ product.category.name }}</p>
                    </div>
                </div>
                <div class="flex flex-row ">
                    <div class="flex justify-start dark:text-gray-500 w-full sm:w-8/12">
                        <div class="flex flex-col">

                            <p class="text-md md:text-lg  font-medium">{{ Intl.NumberFormat('en-ZA', {
                                style: 'currency',
                                currency: 'ZAR',
                            }).format(product.price) }}</p>

                            <p class="text-sm line-through text-red-200 font-light">{{ Intl.NumberFormat('en-ZA', {
                                style: 'currency',
                                currency: 'ZAR',
                            }).format(product.price - 10) }}</p>
                        </div>

                    </div>
                    <div class="hidden md:block w-8/12 mt-4 md:mt-0">
                        <button type="button"
                            class="flex items-center justify-center w-full py-2 px-1  tracking-tight rounded dark:bg-gray-900 dark:text-gray-200">
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 pl-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
  
<script setup lang="ts">
import { defineProps } from 'vue';

const { product } = defineProps<{ product: any }>();
</script>
  