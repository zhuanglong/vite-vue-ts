<template>
  <van-nav-bar
    class="nav-bar"
    :title="getTitle"
    fixed
    placeholder
    safe-area-inset-top
    :z-index="999"
    v-bind="$attrs"
    @click-left="handleClickLeft"
  >
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.left || leftArrow" #left>
      <slot v-if="$slots.left" name="left" />
      <SvgIcon v-else-if="leftArrow" name="svg-sharp-arrow-back-ios" class="left-arrow-icon" />
    </template>
    <template v-if="$slots.right" #right>
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import 'vant/es/nav-bar/style'

import { navBarProps } from './types'

defineOptions({
  inheritAttrs: false,
})

defineProps(navBarProps)

const route = useRoute()
const router = useRouter()

const getTitle = computed(() => route.meta.title)

function handleClickLeft() {
  router.back()
}
</script>

<style lang="scss" scoped>
.nav-bar {
  :deep() {
    .van-nav-bar {
      height: 46px;
    }
  }

  .left-arrow-icon {
    font-size: 20px;
  }
}
</style>
