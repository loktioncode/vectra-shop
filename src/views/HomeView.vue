


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
    <div class="text-center">
      <Products />
    </div>
  </div>
</template>



<script setup lang="ts">
import Products from '@/components/Products.vue'
import Filters from '@/components/Filters.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'

import { useProductStore } from '@/stores/productStore';

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

