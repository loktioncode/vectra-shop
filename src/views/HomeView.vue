


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
import Products from '@/components/ProductListing.vue'
import Filters from '@/components/TopFilters.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import { watchEffect } from 'vue';
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();

watchEffect(() => {
  // productStore.saveStateToLocalStorage();
  if (productStore.selectedCategory !== 'on') {
    productStore.sortByCategory(productStore.selectedCategory);
  }else if (productStore.searchTerm !== '') {
    productStore.updateFilteredProducts(productStore.searchTerm);
  }
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

