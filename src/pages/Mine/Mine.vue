<template>
  <div class="Mine-page">
    <div class="main-content">
      <h1 class="title">{{ routeTitle }}</h1>
      <h3 class="counter">Counter: {{ counterStore.count }}</h3>
      <div :style="{ marginTop: $px2rem(40) }">
        <van-cell title="主题设置" is-link to="/theme-setting" />
        <van-cell title="退出登录" is-link @click="signOut" />
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { showLoadingToast, showFailToast, closeToast } from 'vant';

  import Tabbar from '@/components/Tabbar';

  import { useRouteTitle } from '@/hooks/useRouteTitle';
  import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition';
  import { useUserStore } from '@/stores/user';
  import { useCounterStore } from '@/stores/counter';
  import { useRouteStore } from '@/stores/route';
  import * as userApi from '@/api/userApi';

  defineOptions({ name: 'Mine' });

  useCacheScrollPosition();
  const router = useRouter();
  const routeTitle = useRouteTitle();
  const userInfoStore = useUserStore();
  const counterStore = useCounterStore();
  const routeStore = useRouteStore();

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
        routeStore.setKeepAliveComponents([]);
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
    .main-content {
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
    }
  }
</style>
