<template>
  <div ref="BackgroundVideoBoxRef" class="BackgroundVideoBox">
    <video
      autoplay
      muted
      loop
      preload="auto"
      src="@/assets/views/Component/BackgroundVideo/BackgroundVideo-3.mp4"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.BackgroundVideoBox {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  video {
    width: 100vw;
    height: 100vh;
    object-fit: fill;
  }
}
</style>
