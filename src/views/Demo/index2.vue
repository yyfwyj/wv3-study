<template>
  <div>
    <h1>Demo2</h1>
    <button @click="goPage">跳转首页</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function goPage() {
  router.push('/')
}
</script>

<style></style>