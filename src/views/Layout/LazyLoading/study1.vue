<template>
  <div class="container" ref="containerRef">
    <div class="list">
      <div
        class="item"
        v-for="(item, index) in state.lazyLoadingArr"
        :style="{
          width: `${state?.cardPos[index]?.width || 0}px`,
          height: `${state?.cardPos[index]?.height || 0}px`,
          transform: `translate3D(${state?.cardPos[index]?.x || 0}px,${
            state?.cardPos[index]?.y || 0
          }px,0)`,
        }"
        :key="item.url"
      >
        <img :src="item.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { computed, onMounted, reactive, ref, Ref } from 'vue'

// 定义类型
interface IlazyLoadingArr {
  url: string
  width: number
  height: number
}
type TLazyLoadingArr = IlazyLoadingArr[]

interface ICardPost {
  width: number
  height: number 
  x: number
  y: number
}

type TCardPos = ICardPost[]

// 定义数据
const state = reactive({
  // 瀑布流数组
  lazyLoadingArr: [] as TLazyLoadingArr,
  // 卡片间隔
  gap: 12,
  // 卡片列数
  column: 6,
  // 卡片宽度
  cardWidth: 0,
  // 卡片摆放位置信息
  cardPos: [] as TCardPos,
  // 存储每列的高度，进行初始化操作
  columnHeight: [] as number[],
})
// 容器节点
const containerRef: Ref<HTMLElement | null> = ref(null)

// 获取数据
const getData = async () => {
  const {
    data: { lazyLoadingArr },
  } = await axios.get('/lazyLoading/list')

  computedCardPos(lazyLoadingArr)
  state.lazyLoadingArr = lazyLoadingArr
}

// 计算卡片的所在位置
const computedCardPos = (list: TLazyLoadingArr) => {
  for (let i = 0; i < list.length - 1; i++) {
    const item = list[i]
    // 计算得出卡片高度
    const cardHeight = Math.floor((state.cardWidth * item.height) / item.width)
    // 开始计算每张卡片的位置
    // 先判断是不是第一行，如果是第一行，则只设置X轴，不设置Y轴
    if (i < state.column) {
      state.cardPos.push({
        width: state.cardWidth,
        height: cardHeight,
        x: i % state.column !== 0 ? i * (state.gap + state.cardWidth) : 0,
        y: 0,
      })
      state.columnHeight[i] = cardHeight + state.gap
    } else {
      const { minIndex, minHeight } = minColumn.value
      state.cardPos.push({
        width: state.cardWidth,
        height: cardHeight,
        x:
          minIndex % state.column !== 0
            ? minIndex * (state.gap + state.cardWidth)
            : 0,
        y: minHeight,
      })
      state.columnHeight[minIndex] += cardHeight + state.gap
    }
  }
}

// 计算最小高度
const minColumn = computed(() => {
  let minIndex = 0,
    minHeight = Infinity

  state.columnHeight.forEach((item, index) => {
    if (minHeight > item) {
      minIndex = index
      minHeight = item
    }
  })

  return {
    minIndex,
    minHeight,
  }
})

// 渲染函数
const render = () => {
  // 获取每张卡片的宽度
  if (containerRef.value) {
    const containerWidth = (containerRef.value as HTMLElement).offsetWidth
    state.cardWidth =
      (containerWidth - (state.column - 1) * state.gap) / state.column
    // 获取瀑布流数据
    getData()
  }
}

onMounted(() => {
  render()
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  .list {
    width: 100%;
    height: 100%;
    position: relative;
    .item {
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
