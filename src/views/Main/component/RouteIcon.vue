<template>
  <div class="folder-list">
    <div
      class="folder"
      v-for="routerItem in renderRoutes"
      @click="goPage(routerItem)"
    >
      <div class="folderIcon">
        <img
          v-if="routerItem.children"
          src="@/assets/views/main/folder.svg"
          alt=""
        />
        <img v-else src="@/assets/views/main/file.svg" alt="" />
      </div>
      <div class="folderName">
        {{ routerItem?.meta?.viewName || routerItem.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router'

defineProps<{
  renderRoutes?: Array<RouteRecordRaw>
}>()

const emits = defineEmits(['goPage'])

const goPage = (routerItem: RouteRecordRaw) => {
  emits('goPage', routerItem)
}
</script>

<style lang="scss" scoped>
.folder-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .folder {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 12px 20px;
    margin: 12px;
    border: 1px solid transparent;

    .folderIcon {
      width: 68px;
      height: 68px;
      margin-bottom: 6px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:hover {
      border: 1px solid #fff;
      cursor: pointer;
    }
  }
}
</style>
