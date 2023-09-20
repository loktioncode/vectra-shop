<template>
    <div>
      <h1>Product Information</h1>
      <!-- <div v-if="productStore.loading">Loading...</div>
      <div v-else>
        <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
        <div v-else>
          <div v-for="product in productStore.products" :key="product.id">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
          </div>
        </div>
      </div> -->
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
  
  