import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import { useRouteStore } from '@/stores/route'
import { createRouterGuards } from './guards'
import { mainMenuRoutes, routes } from './modules'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  // tabbar 切换并不能恢复滚动条位置，只有从子路由返回才行，
  // scrollBehavior: (to, from, savedPosition) => {
  //   if (to.meta.cacheScrollPosition && savedPosition) {
  //     return savedPosition
  //   }
  //   else {
  //     return { left: 0, top: 0 }
  //   }
  // },
  // 所以需要 useCacheScrollPosition, cacheScrollPosition 配置使用。
  scrollBehavior: (to) => {
    if (to.meta.cacheScrollPosition) {
      //
    }
    else {
      return { left: 0, top: 0 }
    }
  },
})

export function setupRouter(app: App<Element>) {
  const routeStore = useRouteStore()
  routeStore.setMenus(mainMenuRoutes)
  routeStore.setRoutes(routes)
  app.use(router)
  createRouterGuards(router)
}

export default router
