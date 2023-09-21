<template>
    <div
        class="flex flex-col md:flex-row items-center w-full py-2 my-2 space-y-2 md:space-y-0 md:space-x-2 border border-gray-200 ">
        <!-- Filter Items for Mobile (Centered) -->
        <div class="md:hidden flex flex-col items-center w-auto ">

            <!-- Search Form -->
            <div class="flex items-center w-full">
                <label for="search" class="sr-only">Search</label>
                <div class="relative w-full md:w-auto">
                    <input v-model="searchTerm" id="search" type="text" placeholder="Search products..."
                        class="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100" />
                    <button @click="executeSearch"
                        class="absolute inset-y-0 right-0 flex items-center justify-center px-2 text-gray-500 cursor-pointer">
                        <svg v-if="searchTerm === ''" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                            class="w-4 h-4">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>



            <div class="flex flex-row justify-between py-4">
                <div class="flex justify-end w-6/12 md:w-auto pl-2">
                    <div class="relative inline-block text-gray-700">
                        <select v-model="selectedSortOption"
                            class="block appearance-none w-full md:w-auto bg-gray-900 border  px-4 py-2 pr-8 rounded text-gray-100">
                            <option value="default">Sort by Name (A-Z)</option>
                            <option value="price-asc">Price (Low to High)</option>
                            <option value="price-desc">Price ( High to Low)</option>
                            <option value="cat-alpha">Category (A-Z)</option>

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                            <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end w-6/12 md:w-auto ">
                    <div class="relative text-gray-700">

                        <button @click="toggleDropdown"
                            class="block appearance-none w-full md:w-auto bg-gray-900 border  px-4 py-2 pr-8 rounded text-gray-100">
                            Select Category


                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                                <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>


                        </button>


                        <div v-if="isDropdownOpen" class="mt-2 bg-white rounded-md">
                            <label class="flex justify-start px-4 py-2 hover:bg-gray-100">
                                <input type="radio" class="mr-2 form-radio" v-model="selectedCategory" />
                                All
                            </label>
                            <label v-for="(category, index) in productStore.getCategories" :key="index"
                                class="flex justify-start px-4 py-2 hover:bg-gray-100">
                                <input type="radio" :value="category" v-model="selectedCategory" class="mr-2 form-radio" />
                                {{ category }}
                            </label>
                        </div>
                    </div>
                </div>

            </div>


        </div>

        <!-- Filter Items for Desktop -->
        <div class="hidden md:flex justify-start items-center w-full">

            <div class="text-lg mb-2 w-3/12">
                Total Products: {{ filteredProducts.length }}
            </div>

            <!-- Search Form -->
            <div class="flex items-center w-full">

                <div class="relative text-gray-600 focus-within:text-gray-400">

                    <input v-model="searchTerm" type="search" name="q"
                        class="py-2 text-md text-black rounded pl-10  border border-gray-300" placeholder="Search..."
                        autocomplete="off">
                    <span class="absolute inset-y-0 right-0 flex items-center pl-2 bg-gray">
                        <button @click="executeSearch" class="p-1 mr-1">
                            <svg v-if="searchTerm === ''" xmlns="http://www.w3.org/2000/svg" fill="none"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" class="w-6 h-6">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </span>
                </div>

            </div>
            <div class="flex justify-end w-6/12 md:w-auto pr-12">
                <div class="relative inline-block text-gray-700">
                    <select v-model="selectedSortOption"
                        class="block appearance-none w-full md:w-auto bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:ring">
                        <option value="default">Name (A-Z)</option>
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price ( High to Low)</option>
                        <option value="cat-alpha">Category (A-Z)</option>

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



    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();
const searchTerm = ref(localStorage.getItem('searchTerm') || '');
const selectedSortOption = ref('default');
const isDropdownOpen = ref(false);
const selectedCategory = ref('on');

const filteredProducts = computed(() => productStore.filteredProducts);


onMounted(() => {
    loadFromLocalStorage();
});

const loadFromLocalStorage = () => {
    const searchTerm = localStorage.getItem('searchTerm');
    if (searchTerm) {
        productStore.searchTerm = searchTerm;
    }
};


const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
    selectedCategory.value = 'on';
};

const executeSearchByCategory = () => {
    productStore.sortByCategory(selectedCategory.value);
};

const executeSearch = () => {
    productStore.updateFilteredProducts(searchTerm.value);
};
const sortProducts = () => {
    productStore.sortProducts(selectedSortOption.value);
};

watch(selectedCategory, () => {
    executeSearchByCategory();
});

watch([searchTerm, selectedSortOption], () => {
    executeSearch();
    sortProducts();
});

watch([searchTerm], ([newSearchTerm]) => {
    localStorage.setItem('searchTerm', newSearchTerm);
});

</script>

