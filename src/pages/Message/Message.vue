<template>
  <div class="Message-page">
    <div class="counter">
      Counter：
      <van-button size="small" @click="counterStore.decrease()">-</van-button>
      <span class="number">{{ counterStore.count }}</span>
      <van-button size="small" @click="counterStore.increase()">+</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter';

  defineOptions({ name: 'Message' });

  import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition';

  useCacheScrollPosition();
  const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
  .Message-page {
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
</style>
