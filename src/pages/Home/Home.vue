<template>
  <div class="Home-page">
    <h1 class="title" :style="{ color: data }" @click="refresh">这是一段文字！！！</h1>
    <div :style="{ marginTop: $px2rem(40) }">
      <van-cell title="Assets Demo" is-link to="/assets-demo" />
      <van-cell title="Half Screen" is-link to="/home/half-screen" />
    </div>
  </div>
  <RouterView />
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition';
  import * as testApi from '@/api/testApi';

  defineOptions({ name: 'Home' });

  useCacheScrollPosition();
  const data = ref('');

  function refresh() {
    fetchData();
  }

  async function fetchData() {
    try {
      const res = await testApi.getRandomColor();
      data.value = res;
    } catch (error) {
      //
    }
  }

  onMounted(() => {
    fetchData();
  });
</script>

<style lang="scss" scoped>
  .Home-page {
    height: 100vh;
    padding: 20px;

    .title {
      color: inherit;
      font-size: 24px;
    }
  }
</style>
