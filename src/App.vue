<template>
  <RouterView v-slot="{ Component }">
    <div>
      <Transition mode="out-in" appear>
        <KeepAlive :include="keepAliveComponents">
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </div>
  </RouterView>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRouteStore } from '@/stores/route';

  const routeStore = useRouteStore();
  const keepAliveComponents = computed(() => routeStore.keepAliveComponents);
</script>

<style lang="scss" scoped>
  //
</style>
