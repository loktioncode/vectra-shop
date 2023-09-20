<template>
  <div class="flex">
    <!-- Left Sidebar for Filters -->
    <div class="w-30 p-4">
      <!-- Your filter components can go here -->
    </div>

    <!-- Right Side for Product Information -->
    <div class="w-70 p-4">
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
