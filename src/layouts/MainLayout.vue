<template>
  <div class="MainLayout-root">
    <NavBar v-if="getShowHeader" :left-arrow="false" />
    <KeepAliveLayout />
    <van-tabbar
      class="tabbar"
      safe-area-inset-bottom
      route
      :fixed="true"
      placeholder
      :z-index="999"
    >
      <van-tabbar-item
        v-for="menu in getMenus"
        :key="menu.name"
        :to="menu.path"
        :icon="(menu.meta?.icon as string)"
      >
        {{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  import KeepAliveLayout from '@/layouts/KeepAliveLayout.vue';
  import NavBar from '@/components/NavBar';
  import { useRouteStore } from '@/stores/route';

  defineOptions({ name: 'MainLayout' });

  const route = useRoute();
  const routeStore = useRouteStore();

  // 菜单
  const getMenus = computed(() => routeStore.menus);

  const getShowHeader = computed(() => !route.meta.hideNavbar);
</script>

<style lang="scss" scoped>
  .MainLayout-root {
    .tabbar {
      :deep() {
        .van-tabbar {
          height: 50px;
          @include limit-width();
        }
      }
    }
  }
</style>
