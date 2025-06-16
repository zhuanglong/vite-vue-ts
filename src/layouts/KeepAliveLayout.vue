<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive :include="keepAliveComponents">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useRouteStore } from '@/stores/route'

const routeStore = useRouteStore()
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)
</script>

<!-- <style lang="scss"></style> -->
