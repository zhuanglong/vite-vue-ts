<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive :include="routeStore.keepAliveList">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<script lang="ts" setup>
import { useRouteStore } from '@/stores/route'

const routeStore = useRouteStore()
</script>

<!-- <style lang="scss"></style> -->
