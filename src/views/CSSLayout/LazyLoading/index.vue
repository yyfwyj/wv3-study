<template>
  <div class="container" ref="containerRef">
    <div class="list">
      <div
        v-for="(item, index) in lazyArr"
        class="lazyItem"
        :style="{ height: `${item.height}px`, background: item.background }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import { getRandomColor, getScopeRandomNumber } from '@/utils/funcs'

type TLazy = {
  width: number
  height: number
  background: string
}

// 绑定在`template`中的`container`上，需要通过ref节点获取容器宽度
const containerRef: Ref<HTMLDivElement | null> = ref(null)

// 瀑布流元素数组
const lazyArr: Ref<Array<TLazy>> = ref([])
// 渲染函数
const render = () => {
  for (let i = 0; i < 20; i++) {
    lazyArr.value.push({
      width: 200,
      height: getScopeRandomNumber(250, 450),
      background: getRandomColor(),
    })
  }
}

onMounted(() => {
  render()
})
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  .list {
    width: 100%;
    height: 100%;
    .lazyItem {
      width: 200px;
      margin: 5px;
      border-radius: 5px;
    }
  }
}
</style>
