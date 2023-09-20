<template>
  <div>
    <h1 class="text-3xl text-red-500 font-bold mb-5">Product Information</h1>
    <div v-if="productStore.loading">Loading...</div>
    <div v-else>
      <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
      <div v-else>
        <div class="grid grid-cols-4 gap-4">
          <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ProductCard from '@/components/ProductCard.vue'

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
  
  