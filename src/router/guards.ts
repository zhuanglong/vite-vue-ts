import type { Router } from 'vue-router'
import { useRouteStore } from '@/stores/route'
import { useUserStore } from '@/stores/user'

// 标题
function setupTitle(router: Router) {
  router.afterEach((to) => {
    document.title = (to?.meta?.title as string) || document.title
  })
}

// 鉴权
function setupAuth(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 忽略检查
    if (to.meta.ignoreAuth) {
      next()
      return
    }

    const userInfo = useUserStore()
    if (!userInfo.userInfo?.token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
      return
    }

    next()
  })
}

// 页面缓存
function setupKeepAlive(router: Router) {
  router.afterEach((to) => {
    const routeStore = useRouteStore()
    to.matched.forEach((item) => {
      // 获取当前组件名
      const componentName: any = item.name
      // 如果 componentName 且 keepAliveComponents 不包含 componentName 且即将要进入的路由 meta 属性里 keepAlive 为 true，则缓存该组件
      if (componentName && !routeStore.keepAliveComponents.includes(componentName) && item.meta?.keepAlive) {
        // 需要缓存的组件
        routeStore.addKeepAliveComp(componentName)
      }
      else if (!item.meta?.keepAlive) {
        // 不需要缓存的组件
        // 这里的作用一开始组件设置为缓存，之后又设置不缓存但是它还是存在 keepAliveComponents 数组中
        routeStore.removeKeepAliveComp(componentName)
      }
    })
  })
}

export default function setupGuards(router: Router) {
  setupTitle(router)
  setupAuth(router)
  setupKeepAlive(router)
}
