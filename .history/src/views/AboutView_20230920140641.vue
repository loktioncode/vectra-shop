<template>
  <div class="about">
    <h1>Overall Count is {{ storeCounter.count }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore();
</script>

<style></style>
