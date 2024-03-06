<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div class="MainLayout-root">
    <NavBar v-if="getShowHeader" :left-arrow="false" />
    <RouterView v-slot="{ Component, route }">
      <KeepAlive :include="keepAliveComponents">
        <component :is="Component" :key="route.fullPath" />
      </KeepAlive>
    </RouterView>
    <div class="Tabbar-root">
      <div class="tabbar-placeholder"></div>
      <div class="tabbar">
        <van-tabbar safe-area-inset-bottom route :fixed="false">
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
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  import NavBar from '@/components/NavBar';
  import { useRouteStore } from '@/stores/route';

  defineOptions({ name: 'MainLayout' });

  const route = useRoute();
  const routeStore = useRouteStore();

  // 菜单
  const getMenus = computed(() => routeStore.menus);

  // 需要缓存的路由组件
  const keepAliveComponents = computed(() => routeStore.keepAliveComponents);

  const getShowHeader = computed(() => !route.meta.hideNavbar);

  onMounted(() => {
    routeStore.setKeepAliveComponents([...routeStore.keepAliveComponents, 'MainLayout']);
  });
</script>

<style lang="scss" scoped>
  .MainLayout-root {
    .Tabbar-root {
      .tabbar {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        @include limit-width();

        :deep() {
          .van-tabbar {
            height: 50px;
          }
        }
      }

      .tabbar-placeholder {
        height: 50px;
      }
    }
  }
</style>
