<template>
  <div class="flex">
    <!-- Left Sidebar for Filters -->
    <div class="w-1/4 ">
      <aside class="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
        <nav class="space-y-18 text-sm">
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
      <h1 class="text-3xl text-red-500 font-bold mb-5">Product Information</h1>
      <div v-if="productStore.loading">Loading...</div>
      <div v-else>
        <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
        <div class="px-10">
          <div class="grid grid-cols-4 gap-4">
            <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ProductCard from '@/components/ProductCard.vue';

const productStore = useProductStore();

async function fetchProductInfo() {
  const apiUrl = 'https://fakestoreapi.com/products'; // Replace with your actual API endpoint
  await productStore.fetchProductInfo(apiUrl);
}

onMounted(() => fetchProductInfo());
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
