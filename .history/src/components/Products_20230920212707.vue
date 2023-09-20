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
import { ref, watch } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ProductCard from '@/components/ProductCard.vue';

const productStore = useProductStore();

const visibleProductCount = ref(8); // Default number of products to display
const showMoreCount = 12; // Number of additional products to show when "Show More" is clicked

// Calculate the visible products based on the count
const visibleProducts = ref([]); // Track visible products

// Compute whether to show the "Show More" button
const shouldShowMoreButton = ref(false);

// Update the visible products whenever the product data changes
watch([productStore.products, visibleProductCount], () => {
  visibleProducts.value = productStore.filteredProducts.slice(0, visibleProductCount.value);
  shouldShowMoreButton.value = visibleProductCount.value < productStore.filteredProducts.length;
});

// Show more button logic
const showMoreProducts = () => {
  visibleProductCount.value += showMoreCount;
};

</script>

<style scoped>
.error-message {
  color: red;
}
</style>
