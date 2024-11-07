<script setup lang="ts"></script>

<template>
  <div class="layout">
    <router-view />
    <!-- <div class="div1"><router-view /></div> -->
    <!-- <div class="div2"><router-view name="demo" /></div> -->
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
}

/* .div1 {
  width: 50%;
  height: 100%;
  background-color: aqua;
}

.div2 {
  width: 50%;
  height: 100%;
  background-color: aquamarine;
} */
</style>
