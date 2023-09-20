<template>
  <div class="flex">
    <div v-if="productStore.loading">Loading...</div>
    <div v-else>
      <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
      <div class="xl:px-10">
        <!-- Use responsive grid classes -->
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in visibleProducts" :key="product.id" :product="product" />

          <!-- Show more button -->
          <button v-if="shouldShowMoreButton" @click="showMoreProducts" class="text-blue-500">Show More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, watch } from 'vue';
import { useProductStore } from '@/stores/productStore';
import type { Product } from '@/stores/productStore'; // Import the Product type from your store

const productStore = useProductStore();

const visibleProductCount: Ref<number> = ref(8); // Specify the type as Ref<number>
const showMoreCount = 4;

const visibleProducts: Ref<Product[]> = ref([]); // Specify the type as Ref<Product[]>

// Watch for changes in both product data and visibleProductCount
watch([productStore.filteredProducts, visibleProductCount], () => {
  visibleProducts.value = productStore.filteredProducts.slice(0, visibleProductCount.value);
});
</script>


<style scoped>
.error-message {
  color: red;
}
</style>
