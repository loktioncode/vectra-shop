<template>
    <div>
      <h1 class="text-3xl text-red-500 font-bold mb-5">Product Information</h1>
      <div v-if="productStore.loading">Loading...</div>
      <div v-else>
        <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
        <div v-else class="grid">
          <div v-for="product in productStore.products" :key="product.id">
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useProductStore } from '@/stores/productStore';
  
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
  
  