<template>
  <van-tabbar
    class="tabbar"
    safe-area-inset-bottom
    route
    :fixed="true"
    placeholder
    :z-index="999"
    v-bind="attrs"
  >
    <van-tabbar-item
      v-for="menu in getMenus"
      :key="menu.name"
      :to="menu.path"
      :icon="(menu.meta?.icon as string)"
    >
      {{ menu.meta?.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import type { tabbarProps } from 'vant'
import { computed, useAttrs } from 'vue'

import { useRouteStore } from '@/stores/route'

type Props = typeof tabbarProps

defineOptions({
  inheritAttrs: false,
})

defineProps({} as unknown as Props)

const attrs = useAttrs()

const routeStore = useRouteStore()

// 菜单
const getMenus = computed(() => routeStore.menus)
</script>

<style lang="scss" scoped>
.tabbar {
  :deep() {
    .van-tabbar {
      height: 50px;

      @include limit-width;
    }
  }
}
</style>
