import type { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useRouteStore = defineStore(
  'routeStore',
  () => {
    const menus = ref<RouteRecordRaw[]>([])
    const routes = ref<RouteRecordRaw[]>([])
    const keepAliveComponents = ref<string[]>([])

    const getMenus = computed(() => menus.value)

    function setRoutes(newRoutes: RouteRecordRaw[]) {
      routes.value = newRoutes
    }

    function setMenus(newMenus: RouteRecordRaw[]) {
      menus.value = newMenus
    }

    function setKeepAliveComponents(compNames: string[]) {
      keepAliveComponents.value = compNames
    }

    return {
      menus,
      routes,
      keepAliveComponents,
      getMenus,
      setRoutes,
      setMenus,
      setKeepAliveComponents,
    }
  },
)
