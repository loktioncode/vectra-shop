<template>
    <div class="flex flex-col md:flex-row items-center w-full py-5 space-y-2 md:space-y-0 md:space-x-2">
        <!-- Filter Items for Mobile (Centered) -->
        <div class="md:hidden flex flex-col items-center w-full">
            <!-- Product Count Display -->
            <div class="text-lg mb-2 w-full">
                Total Products: {{ filteredProducts.length }}
            </div>

            <!-- Search Form -->
            <div class="flex items-center w-full">
                <label for="search" class="sr-only">Search</label>
                <input v-model="searchTerm" id="search" type="text" placeholder="Search products..."
                    class="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                <button @click="clearSearch" v-if="searchTerm" class="text-red-500 hover:text-red-700 focus:outline-none">
                    Clear
                </button>
            </div>
        </div>

        <!-- Filter Items for Desktop -->
        <div class="hidden md:flex justify-start items-center w-6/12">
            <!-- Product Count Display -->
            <div class="text-lg mb-2 w-4/12">
                Total Products: {{ filteredProducts.length }}
            </div>

            <!-- Search Form -->
            <div class="flex items-center w-7/12">


                <div class="relative mr-6 my-2">
                    <input type="search" class="bg-purple-white shadow rounded border-0 p-3"
                        placeholder="Search by name...">
                    <div class="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
                        <svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52.966 52.966"
                            style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
                            <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z" />

                        </svg>

                    </div>
                </div>

                <button @click="clearSearch" v-if="searchTerm" class="text-red-500 hover:text-red-700 focus:outline-none">
                    Clear
                </button>
            </div>
        </div>

        <!-- Sort Dropdown -->
        <div class="flex justify-end w-6/12 md:w-auto pr-12">
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
