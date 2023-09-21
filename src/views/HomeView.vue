


<template>
  <Filters />

  <div class="flex">
    <!-- Left Sidebar for Filters -->
    <div class="w-auto pt-4 sidebar">
      <aside class="w-full p-6 sm:w-60 ">
        <CategoryFilter />
      </aside>
    </div>

    <!-- Right Side for Product List -->
    <div class="flex flex-col justify-center justify-items-center">
      <Products />
    </div>
  </div>
</template>



<script setup lang="ts">
import Products from '@/components/Products.vue'
import Filters from '@/components/Filters.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();



// Update local storage whenever count changes
const saveToStorage = () => {
  const filterState = {
  searchTerm: '',
  selectedCategory: '',
};
  filterState.searchTerm = productStore.searchTerm;
  filterState.selectedCategory = productStore.selectedCategory;


  localStorage.setItem('searchInput', JSON.stringify(filterState));
};

onMounted(() => {
  window.addEventListener('beforeunload', saveToStorage);
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', saveToStorage);
});

</script>

<style>
.sidebar {
  display: block;

}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    align-items: center;
  }
}

@media (max-width: 640px) {
  .sidebar {
    display: none;

  }
}
</style>

