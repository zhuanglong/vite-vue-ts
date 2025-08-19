<template>
  <van-tabbar
    class="Tabbar-comp"
    safe-area-inset-bottom
    route
    :fixed="true"
    placeholder
    :z-index="999"
    v-bind="attrs"
  >
    <van-tabbar-item
      v-for="menu in routeStore.menus"
      :key="menu.name"
      :to="menu.path"
    >
      {{ menu.meta?.title }}
      <template #icon>
        <SvgIcon v-if="menu.meta?.icon === 'tabbar-home'" name="svg-tabbar-home" />
        <SvgIcon v-if="menu.meta?.icon === 'tabbar-chat'" name="svg-tabbar-chat" />
        <SvgIcon v-if="menu.meta?.icon === 'tabbar-mine'" name="svg-tabbar-mine" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import type { tabbarProps } from 'vant'

import { useRouteStore } from '@/stores/route'

type Props = typeof tabbarProps

defineOptions({
  inheritAttrs: false,
})

defineProps({} as unknown as Props)

const attrs = useAttrs()

const routeStore = useRouteStore()
</script>

<style lang="scss" scoped>
.Tabbar-comp {
  :deep() {
    .van-tabbar {
      height: 50px;
    }

    .van-tabbar-item__icon {
      width: 22px;
      height: 22px;
    }
  }
}
</style>
