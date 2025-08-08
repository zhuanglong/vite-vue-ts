<template>
  <div class="Home-page">
    <NavBar :title="routeTitle" :left-arrow="false" />
    <div class="main-content">
      <h1 class="title" :style="{ color: data }" @click="refresh">
        这是一段文字！！！
      </h1>
      <div :style="{ marginTop: $px2rem(40), marginBottom: '100%' }">
        <van-cell title="Assets Demo" is-link to="/assets-demo" />
        <van-cell title="Half Screen" is-link to="/home/half-screen" />
      </div>
    </div>
    <Tabbar />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import * as testApi from '@/api/testApi'
import NavBar from '@/components/NavBar'

import Tabbar from '@/components/Tabbar'
import { useCacheScrollPosition } from '@/hooks/useCacheScrollPosition'
import { useRouteTitle } from '@/hooks/useRouteTitle'

defineOptions({ name: 'Home' })

useCacheScrollPosition()
const data = ref('')
const routeTitle = useRouteTitle()

function refresh() {
  fetchData()
}

async function fetchData() {
  try {
    const res = await testApi.getRandomColor()
    data.value = res
  }
  catch {
    //
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.Home-page {
  .main-content {
    height: 100vh;
    padding: 20px;

    .title {
      font-size: 24px;
      color: inherit;
    }
  }
}
</style>
