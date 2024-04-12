<template>
  <div class="fs-waterfall-container" ref="containerRef">
    <div class="fs-waterfall-list">
      <div
        class="fs-waterfall-item"
        v-for="(item, index) in state.cardList"
        :style="{
          width: `${state.cardPos[index].width}px`,
          height: `${state.cardPos[index].height}px`,
          transform: `translate3d(${state.cardPos[index].x}px, ${state.cardPos[index].y}px, 0)`,
        }"
      >
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, Ref, ref, reactive } from 'vue'
import axios from 'axios'

// 绑定在`template`中的`container`上，需要通过ref节点获取容器宽度
const containerRef: Ref<HTMLDivElement | null> = ref(null)

// 瀑布流需要的数据
export interface IWaterFallProps {
  gap: number // 卡片间隔
  column: number // 瀑布流列数
  bottom: number // 距底距离（触底加载更多）
  pageSize: number
  request: (page: number, pageSize: number) => Promise<ICardItem[]>
}

export interface ICardItem {
  url: string
  width: number
  height: number
  [key: string]: any
}

// 单个卡片计算的位置信息，设置样式
export interface ICardPos {
  width: number
  height: number
  x: number
  y: number
}

const props = reactive({
  gap: 12, // 卡片间隔
  column: 6, // 瀑布流列数
  bottom: 20, // 距底距离（触底加载更多）
  pageSize: 1,
  request: (page: number, pageSize: number) => Promise<ICardItem[]>,
})

const state = reactive({
  isFinish: false, // 判断是否已经没有数据，后续不再发送请求
  page: 1,
  cardWidth: 0, // // 容器内卡片宽度
  cardList: [] as ICardItem[], // 卡片数据源
  cardPos: [] as ICardPos[], // 卡片摆放位置信息
  columnHeight: new Array(props.column).fill(0) as number[], // 存储每列的高度，进行初始化操作
})

// 渲染函数
const render = () => {
  if (containerRef.value) {
    const containerWidth = containerRef.value.clientWidth
    state.cardWidth =
      (containerWidth - props.gap * (props.column - 1)) / props.column
    getCardList(state.page, props.pageSize)
  }
}

const getCardList = async (page: number, pageSize: number) => {
  if (state.isFinish) return
  // const list = await props.request(page, pageSize)
  let list
  await axios.get('/lazyLoading/list').then((res) => {
    list = res.data.lazyLoadingArr
    state.page++
    if (!list.length) {
      state.isFinish = true
      return
    }
    computedCardPos(list) // key：根据请求的数据计算卡片位置
    state.cardList = [...list]
  })
}

const minColumn = computed(() => {
  let minIndex = -1,
    minHeight = Infinity

  state.columnHeight.forEach((item, index) => {
    if (item < minHeight) {
      minHeight = item
      minIndex = index
    }
  })

  return {
    minIndex,
    minHeight,
  }
})

const computedCardPos = (list: ICardItem[]) => {
  list.forEach((item, index) => {
    const cardHeight = Math.floor((item.height * state.cardWidth) / item.width)
    if (index < props.column) {
      state.cardPos.push({
        width: state.cardWidth,
        height: cardHeight,
        x:
          index % props.column !== 0
            ? index * (state.cardWidth + props.gap)
            : 0,
        y: 0,
      })
      state.columnHeight[index] = cardHeight + props.gap
    } else {
      const { minIndex, minHeight } = minColumn.value
      state.cardPos.push({
        width: state.cardWidth,
        height: cardHeight,
        x:
          minIndex % props.column !== 0
            ? minIndex * (state.cardWidth + props.gap)
            : 0,
        y: minHeight,
      })
      state.columnHeight[minIndex] += cardHeight + props.gap
    }
  })
  console.log(state.cardPos, list)
}

onMounted(() => {
  render()
})
</script>

<style lang="scss" scoped>
.fs-waterfall {
  &-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll; // 注意需要提前设置展示滚动条，如果等数据展示再出现滚动造成计算偏差
    overflow-x: hidden;
  }
  &-list {
    width: 100%;
    position: relative;
  }
  &-item {
    position: absolute;
    left: 0;
    top: 0;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
