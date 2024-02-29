<template>
  <div className="Message-page">
    <h1 className="title">Message</h1>
    <div className="counter">
      Counter：
      <van-button size="small" @click="counterStore.decrease()">-</van-button>
      <span className="number">{{ counterStore.count }}</span>
      <van-button size="small" @click="counterStore.increase()">+</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter';

  defineOptions({
    name: 'Message',
  });

  import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition';

  useCacheScrollPosition();
  const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
  .Message-page {
    height: 100vh;
    background-color: chocolate;

    .title {
      padding: 20px;
      margin: 0;
      color: #fff;
    }

    .counter {
      padding: 20px;
      color: #fff;

      .number {
        padding: 5px;
      }
    }
  }
</style>
