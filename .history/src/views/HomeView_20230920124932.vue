
<template>
  <div class="home">
    <h1 class="count">0</h1>
    <div class="buttons">
      <button>-</button>
      <button @click="increaseCount">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const increaseCount = () => {
  count.value++;
}


</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    align-items: center;
  }
  .count{
    font-size: 60px;
    margin: 20px;
  }
  .buttons button{
    font-size: 40px;
    margin: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>

