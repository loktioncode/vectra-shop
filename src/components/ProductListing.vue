<template>
  <div v-if="productStore.loading">
    <h1>Loading....</h1>
  </div>
  <div v-else>
    <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
    <div class="xl:px-10">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>
      <button @click="showMore" v-if="showMoreButtonVisible" class="items-center m-6  py-2 px-4  tracking-tight rounded dark:bg-gray-900 dark:text-gray-200">Show More</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ProductCard from '@/components/ProductCard.vue';

const productStore = useProductStore();
const displayedProductsCount = ref(8);

onMounted(() => {
  const apiUrl = 'https://api.escuelajs.co/api/v1/products';
  productStore.fetchProductInfo(apiUrl);
});

watchEffect(() => {
  productStore.updateFilteredProducts(productStore.searchTerm);
});

const displayedProducts = computed(() => {
  return productStore.filteredProducts.slice(0, displayedProductsCount.value);
});

const showMoreButtonVisible = computed(() => {
  return displayedProducts.value.length < productStore.filteredProducts.length;
});

const showMore = () => {
  displayedProductsCount.value += 8; // Increase the displayed product count
};
</script>

<style scoped>
.error-message {
  color: red;
}
</style>

