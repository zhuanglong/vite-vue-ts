<template>
  <div class="Home-page">
    <h1 class="title" :style="{ color: data }" @click="refresh">Home</h1>
    <van-button :style="{ margin: '20px' }" @click="router.push('/assets-demo')">
      Assets demo page
    </van-button>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition';
  import * as testApi from '@/api/testApi';

  defineOptions({
    name: 'Home',
  });

  useCacheScrollPosition();
  const router = useRouter();
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
    background-color: antiquewhite;

    .title {
      padding: 20px;
      margin: 0;
      color: cadetblue;
    }
  }
</style>
