<template>
  <div class="relative text-gray-700">
    <button @click="toggleDropdown"
      class="relative block appearance-none w-full md:w-auto bg-gray-300 border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
      Select Category
      <svg class="absolute inset-y-0 right-0 w-4 h-4 mt-2 mr-3 transition-transform transform"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
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
</template>
  
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();
const isDropdownOpen = ref(false);
const selectedCategory = ref(localStorage.getItem('selectedCategory') || 'on');

onMounted(() => {
  loadFromLocalStorage();
});

const loadFromLocalStorage = () => {
  const searchTerm = localStorage.getItem('selectedCategory');
  if (searchTerm) {
    productStore.searchTerm = searchTerm;
  }
};


watch([selectedCategory], ([selectedCategory]) => {
  localStorage.setItem('selectedCategory', selectedCategory);
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  selectedCategory.value = 'on'; // Reset the selected category when the dropdown is opened
};

const executeSearchByCategory = () => {
  // Use the selectedCategory value for sorting or filtering
  productStore.sortByCategory(selectedCategory.value);
};

watch(selectedCategory, () => {
  executeSearchByCategory();
});
</script>
  
  