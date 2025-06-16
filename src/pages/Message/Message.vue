<template>
  <div class="Message-page">
    <NavBar :left-arrow="false" />
    <div class="main-content">
      <div class="counter">
        Counter：
        <van-button size="small" @click="counterStore.decrease()">
          -
        </van-button>
        <span class="number">{{ counterStore.count }}</span>
        <van-button size="small" @click="counterStore.increase()">
          +
        </van-button>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar'
import Tabbar from '@/components/Tabbar'

import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition'
import { useCounterStore } from '@/stores/counter'

defineOptions({ name: 'Message' })

useCacheScrollPosition()
const counterStore = useCounterStore()
</script>

<style lang="scss" scoped>
.Message-page {
  .main-content {
    height: 100vh;
    padding: 20px;

    .counter {
      display: flex;
      align-items: center;
      color: inherit;

      .number {
        padding: 5px;
      }
    }
  }
}
</style>
