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
  .button button{
    font-size: 30px;
    margin: 10px;
  }
}
</style>

