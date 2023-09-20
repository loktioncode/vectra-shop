<template>
  <div class="item">
    <h1 class="count">{{ storeCounter.count }}</h1>
  </div>
</template>


<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore();


</script>

<style scoped>
.block {
  width: 100px;
  height: 100px;
  background-color: azure;
  padding: 10px;
}

.count {
  font-size: 60px;
  margin: 20px;
}
</style>
