<template>
  <div class="Login-page">
    <h1 class="title">ViteVueTSMobile</h1>
    <div class="btn-wrapper">
      <van-button class="btn" type="primary" @click="signIn">登录</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router';
  import { showLoadingToast, showFailToast, closeToast } from 'vant';

  import { useUserStore } from '@/stores/user';
  import * as userApi from '@/api/userApi';

  const router = useRouter();
  const route = useRoute();
  const { setUserInfo } = useUserStore();

  const path = route.redirectedFrom?.fullPath || '/';

  async function signIn() {
    showLoadingToast({
      message: 'signin…',
      forbidClick: true,
    });
    try {
      const res = await userApi.login({ username: 'Tom', password: '123456' });
      if (res.code === 0) {
        closeToast();
        setUserInfo(res.data);
        router.replace(path);
      } else {
        showFailToast({ message: 'signIn error' });
      }
    } catch (error) {
      closeToast();
    }
  }
</script>

<style lang="scss" scoped>
  .Login-page {
    padding: 20px;
    text-align: center;

    .title {
      margin-top: 50px;
      color: inherit;
      font-size: 24px;
      font-weight: bold;
    }

    .btn-wrapper {
      width: 100%;
      margin-top: 20px;

      .btn {
        width: 60%;
      }
    }
  }
</style>
