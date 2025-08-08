import type { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'

export const useRouteStore = defineStore(
  'routeStore',
  () => {
    const menus = ref<RouteRecordRaw[]>([])
    const routes = ref<RouteRecordRaw[]>([])
    const keepAliveList = ref<string[]>([])

    function setMenus(newMenus: RouteRecordRaw[]) {
      menus.value = newMenus
    }

    function setRoutes(newRoutes: RouteRecordRaw[]) {
      routes.value = newRoutes
    }

    function addKeepAliveName(name: string) {
      if (!keepAliveList.value.includes(name)) {
        keepAliveList.value.push(name)
      }
    }

    function removeKeepAliveName(name: string) {
      if (keepAliveList.value.includes(name)) {
        keepAliveList.value = keepAliveList.value.filter(item => item !== name)
      }
    }

    function clearKeepAliveList() {
      keepAliveList.value = []
    }

    return {
      menus,
      routes,
      keepAliveList,
      setRoutes,
      setMenus,
      addKeepAliveName,
      removeKeepAliveName,
      clearKeepAliveList,
    }
  },
)
