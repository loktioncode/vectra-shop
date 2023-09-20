


<template>
  <Filters />

  <div class="flex">
    <!-- Left Sidebar for Filters -->
    <div class="w-1/4 pt-4">
      <aside class="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
        <nav class="space-y-10 text-sm">
          <div class="space-y-2">
            <h2 class="text-sm font-semibold tracki uppercase dark:text-gray-400">Getting Started</h2>
            <div class="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">Installation</a>
              <a rel="noopener noreferrer" href="#">Plugins</a>
              <a rel="noopener noreferrer" href="#">Migrations</a>
              <a rel="noopener noreferrer" href="#">Appearance</a>
              <a rel="noopener noreferrer" href="#">Mamba UI</a>
            </div>
          </div>

        </nav>
      </aside>
    </div>

    <!-- Right Side for Product Information -->
    <div class="w-4/4 p-4">
      <Products />
    </div>
  </div>
</template>



<script setup lang="ts">
import Products from '@/components/Products.vue'
import Filters from '@/components/Filters.vue'

</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    align-items: center;
  }



}
</style>

