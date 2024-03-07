<template>
  <div>
    <h1>Demo</h1>
    <button @click="goPage">跳转</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function goPage() {
  router.push({
    name: 'demo'
  })
}
</script>

<style></style>