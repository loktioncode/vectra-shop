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
                <div class="relative w-full md:w-auto">
                    <input v-model="searchTerm" id="search" type="text" placeholder="Search products..."
                        class="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100" />
                    <button @click="executeSearch"
                        class="absolute inset-y-0 right-0 flex items-center justify-center px-2 text-gray-500 cursor-pointer">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M8.293 11.293a1 1 0 001.414 0L12 8.414V18a1 1 0 102 0V8.414l2.293 2.293a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Filter Items for Desktop -->
        <div class="hidden md:flex justify-start items-center w-6/12">
            <!-- Product Count Display -->
            <div class="text-lg mb-2 w-4/12">
                Total Products: {{ filteredProducts.length }}
            </div>

            <!-- Search Form -->
        

    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm text-black  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
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
import { useProductStore } from '@/stores/productStore'; // Import store

const productStore = useProductStore(); // Initialize  store

const searchTerm = ref('');
const selectedSortOption = ref('default');

const clearSearch = () => {
    searchTerm.value = '';
};

const executeSearch = () => {
    // Implement your search functionality here
};

const filteredProducts = computed(() => {
    let result = [...productStore.products]; // Use the products from  store

    if (searchTerm.value) {
        result = result.filter(product =>
            product.title.toLowerCase().includes(searchTerm.value.toLowerCase())
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
