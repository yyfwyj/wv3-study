<template>
  <div class="CssVariableChange">
    <div class="btn-box">
      <button v-for="item in btnArr" @click="change(item)">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

const btnArr: Ref<string[]> = ref(['default', 'black', 'blue', 'none'])

const change = (item: string) => {
  document.documentElement.setAttribute('data-theme', item)
}
</script>

<style scoped>
.CssVariableChange {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-background);
  transition: all 0.25s;

  .btn-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      width: 160px;
      height: 70px;
      margin: 6px;
      border: none;
      border-radius: 6px;
      font-size: 20px;

      &:hover {
        cursor: pointer;
        box-shadow: 0 1px 5px 5px #bcb9b967;
        opacity: 0.5;
        transition: all 0.25s;
      }

      &:active {
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>
