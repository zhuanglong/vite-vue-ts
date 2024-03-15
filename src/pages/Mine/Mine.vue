<template>
  <div class="Mine-page">
    <h1 class="title">{{ route.meta.title }}</h1>
    <h3 class="counter">Counter: {{ counterStore.count }}</h3>
    <van-button class="btn" @click="router.push('/theme-setting')">主题设置</van-button>
    <br />
    <van-button class="btn" type="danger" @click="signOut">退出登录</van-button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router';
  import { showLoadingToast, showFailToast, closeToast } from 'vant';

  import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition';
  import { useUserStore } from '@/stores/user';
  import { useCounterStore } from '@/stores/counter';
  import * as userApi from '@/api/userApi';

  defineOptions({ name: 'Mine' });

  useCacheScrollPosition();
  const router = useRouter();
  const route = useRoute();
  const userInfoStore = useUserStore();
  const counterStore = useCounterStore();

  async function signOut() {
    showLoadingToast({
      message: 'signOut…',
      forbidClick: true,
    });
    try {
      const res = await userApi.logout();
      if (res.code === 0) {
        closeToast();
        userInfoStore.setUserInfo(null);
        router.push('/login');
      } else {
        showFailToast({
          message: 'signOut error',
        });
      }
    } catch (error) {
      closeToast();
    }
  }
</script>

<style lang="scss" scoped>
  .Mine-page {
    height: 100vh;
    padding: 20px;

    .title {
      color: inherit;
      // color: var(--test-theme-color);
      font-size: 24px;
    }

    .counter {
      margin-top: 40px;
      color: inherit;
    }

    .btn {
      margin-top: 20px;
    }
  }
</style>
