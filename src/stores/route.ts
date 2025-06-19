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

    function addKeepAliveComp(componentName: string) {
      keepAliveComponents.value.push(componentName)
    }

    function removeKeepAliveComp(componentName: string) {
      const index = keepAliveComponents.value.findIndex(name => name === componentName)
      if (index !== -1) {
        keepAliveComponents.value.splice(index, 1)
      }
    }

    function claenKeepAliveComp() {
      keepAliveComponents.value = []
    }

    return {
      menus,
      routes,
      keepAliveComponents,
      getMenus,
      setRoutes,
      setMenus,
      addKeepAliveComp,
      removeKeepAliveComp,
      claenKeepAliveComp,
    }
  },
)
