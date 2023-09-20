<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home">
    <h1 class="count">0</h1>
    <div class="buttons">
      <button>-</button>
      <button>+</button>
    </div>
  </div>
</template>

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
    font-size: 50px;
    margin: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>

