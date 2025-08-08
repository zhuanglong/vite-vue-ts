<template>
  <div class="Login-page">
    <h1 class="title">
      ViteVueTSMobile
    </h1>
    <div class="btn-wrapper">
      <van-button class="btn" type="primary" @click="signIn">
        登录
      </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { closeToast, showFailToast, showLoadingToast } from 'vant'
import { useRoute, useRouter } from 'vue-router'

import * as userApi from '@/api/userApi'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const redirect = route.query.redirect?.toString() ?? '/'

async function signIn() {
  showLoadingToast({
    message: 'Sign in...',
    forbidClick: true,
  })
  try {
    const res = await userApi.login({ username: 'Tom', password: '123456' })
    if (res.code === 0) {
      closeToast()
      userStore.setToken(res.data.token)
      userStore.setUserInfo(res.data)
      router.replace(redirect)
    }
    else {
      showFailToast({ message: 'Sign in error' })
    }
  }
  catch {
    closeToast()
  }
}
</script>

<style lang="scss" scoped>
.Login-page {
  padding: 20px;
  text-align: center;

  .title {
    margin-top: 50px;
    font-size: 24px;
    font-weight: bold;
    color: inherit;
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
