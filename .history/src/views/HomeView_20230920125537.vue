

<template>
  <div class="home">
    <h1 class="count">{{ count  }}</h1>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
    <hr>
    <div>
      this counter is : odd/even
    </div>
  </div>
</template>



<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { computed, ref } from 'vue';

const count = ref(0);

const increaseCount = () => {
  count.value++;
}
const decreaseCount = () => {
  count.value--;
}

const oddOrEven = computed(() => {
  if (count.value % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    align-items: center;
  }

  .count {
    font-size: 60px;
    margin: 20px;
  }

  .buttons button {
    font-size: 40px;
    margin: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>

