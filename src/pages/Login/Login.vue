<template>
  <div className="Login-page">
    <h1>Sign in to X</h1>
    <p>
      <van-button type="primary" @click="signIn">Fake sign in</van-button>
    </p>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router';
  import { showLoadingToast, showFailToast, closeToast } from 'vant';

  import { useUserInfoStore } from '@/stores/userInfo';
  import * as userApi from '@/api/userApi';

  defineOptions({
    name: 'Login',
  });

  const router = useRouter();
  const route = useRoute();
  const { setUserInfo } = useUserInfoStore();

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
    text-align: center;
  }
</style>
