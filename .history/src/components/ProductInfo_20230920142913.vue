<template>
    <div>
        <h1>Product Information</h1>
        <div v-if="productStore.loading">Loading...</div>
        <div v-else>
            <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>
            <div v-else>
                <h2>{{ productStore.product.name }}</h2>
                <p>{{ productStore.product.description }}</p>
                <p>Price: ${{ productStore.product.price }}</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useProductStore } from '@/stores/productStore';


const productStore = useProductStore();

// async function fetchProductInfo() {
//     const apiUrl = 'https://fakestoreapi.com/products'; // Replace with your actual API endpoint
//     await productStore.fetchProductInfo(apiUrl);
// }


</script>
  
<style scoped>
.error-message {
    color: red;
}
</style>
  