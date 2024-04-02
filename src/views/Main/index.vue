<template>
  <div id="Main" class="Main">
    <RouteIcon :renderRoutes="renderRoutes" @goPage="goPage"/>
  </div>
</template>

<script setup lang="ts">
import RouteIcon from './component/RouteIcon.vue'
import { ref,Ref } from 'vue'
import { routes } from '@/router'
import { RouteRecordRaw,useRouter } from 'vue-router'

const renderRoutes:Ref<Array<RouteRecordRaw>> = ref(
  routes.filter((item: RouteRecordRaw) => item.meta && item.meta.render)
)

const router = useRouter()

const goPage = (routerItem: RouteRecordRaw) => {
  if (routerItem?.children) {
    renderRoutes.value = routerItem?.children
  } else {
    router.push(routerItem.path)
  }
}
</script>

<style lang="scss" scoped>
.Main {
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  background-color: black;
  padding: 24px;
}
</style>
