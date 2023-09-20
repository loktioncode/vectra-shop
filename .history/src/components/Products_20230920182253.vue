<template>
  <div class="flex">
    <div v-if="productStore.loading">Loading...</div>
    <div v-else>
      <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
      <div class="px-10">
        <div class="grid grid-cols-4 gap-8">
          <ProductCard v-for="product in productStore.filteredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ProductCard from '@/components/ProductCard.vue';

const productStore = useProductStore();

onMounted(() => {
  // Fetch product information when the component is mounted
  const apiUrl = 'https://fakestoreapi.com/products'; // Replace with your actual API endpoint
  productStore.fetchProductInfo(apiUrl);
});

// Watch for changes in searchTerm and update filteredProducts
watchEffect(() => {
  productStore.updateFilteredProducts(productStore.searchTerm);
});
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
