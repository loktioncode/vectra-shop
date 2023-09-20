<template>
  <div class="about">
    <h1>Overall Count is {{ storeCounter.count }}</h1>
  </div>
  <div class="home">
    <Counter />
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
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import Counter from '@/components/Counter.vue'

const storeCounter = useCounterStore();
</script>

<style>
.buttons button {
  font-size: 40px;
  margin: 20px;
  width: 50px;
  height: 50px;
}
</style>
