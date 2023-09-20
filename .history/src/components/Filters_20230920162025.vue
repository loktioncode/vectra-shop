<template>
    <div class="flex flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full py-5">
        <div class="w-6/12 flex flex-row">
            <!-- Product Count Display -->
            <div class="text-lg font-semibold mb-2 md:mb-0 w-6/12">
                Total Products: {{ filteredProducts.length }}
            </div>

            <!-- Search Form -->
            <div class="flex items-center  w-4/12 ">
                <label for="search" class="sr-only">Search</label>
                <input v-model="searchTerm" id="search" type="text" placeholder="Search products..."
                    class="w-full md:w-auto border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                <button @click="clearSearch" v-if="searchTerm" class="text-red-500 hover:text-red-700 focus:outline-none">
                    Clear
                </button>
            </div>
        </div>


        <!-- Sort Dropdown -->
        <div class="relative inline-block text-gray-700">
            <select v-model="selectedSortOption"
                class="block appearance-none w-full md:w-auto bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:ring">
                <option value="default">Default</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <!-- Add more sorting options as needed -->
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M8.293 11.293a1 1 0 001.414 0L12 8.414V18a1 1 0 102 0V8.414l2.293 2.293a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" />
                </svg>
            </div>
        </div>
    </div>
</template>
  
  

<script setup lang="ts">
import { ref, computed } from 'vue';

// Sample product data (replace with your actual data)
const products = [
    { id: 1, name: 'Product 1', price: 20.0 },
    { id: 2, name: 'Product 2', price: 30.0 },
    { id: 3, name: 'Product 3', price: 15.0 },
    // Add more products as needed
];

const searchTerm = ref('');
const selectedSortOption = ref('default');

const clearSearch = () => {
    searchTerm.value = '';
};

const filteredProducts = computed(() => {
    let result = [...products];

    if (searchTerm.value) {
        result = result.filter(product =>
            product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    }

    if (selectedSortOption.value === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption.value === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
    }

    return result;
});
</script>
