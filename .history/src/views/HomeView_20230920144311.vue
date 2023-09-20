

<template>
  <div class="home">
    <!-- <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr>
    <div>
      this counter is : {{ storeCounter.oddOrEven }}
    </div>
    <hr>
    <div>
      <h3>Edit Counter:</h3>
      <input v-model="storeCounter.count" type="number" name="count" id="count">
    </div>
  </div>
  <hr> -->
  <div>
    <Products />
  </div>

</template>



<script setup lang="ts">
import Counter from '@/components/Counter.vue'
import Products from '@/components/Products.vue'

import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore();


</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    align-items: center;
  }



  .buttons button {
    font-size: 40px;
    margin: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>

