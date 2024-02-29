<template>
  <div class="Mine-page">
    <h1 class="title">Mine</h1>
    <h3 class="counter">Counter: {{ counterStore.count }}</h3>
    <van-button class="btn" @click="signOut">Sign out</van-button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { showLoadingToast, showFailToast, closeToast } from 'vant';

  import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition';
  import { useUserInfoStore } from '@/stores/userInfo';
  import { useCounterStore } from '@/stores/counter';
  import * as userApi from '@/api/userApi';

  defineOptions({
    name: 'Mine',
  });

  useCacheScrollPosition();
  const router = useRouter();
  const userInfoStore = useUserInfoStore();
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
    background-color: brown;

    .title {
      padding: 20px;
      margin: 0;
      color: #fff;
    }

    .counter {
      padding-left: 20px;
      color: #fff;
    }

    .btn {
      margin: 20px;
    }
  }
</style>
