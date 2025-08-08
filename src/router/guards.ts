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

    // 是否登录
    const userStore = useUserStore()
    if (!userStore.token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
      return
    }

    // roles 为空则不需要检查
    if ((to.meta?.roles || []).length === 0) {
      next()
      return
    }

    // 需要检查 roles
    if (userStore.authRoles.some(item => (to.meta?.roles || []).includes(item))) {
      next()
      return
    }

    next('/403')
  })

  // router.afterEach((to) => {
  //   if (to.path !== '/login') {
  //     document.querySelector('.first-loading')?.remove()
  //   }
  // })
}

// 页面缓存
function setupKeepAlive(router: Router) {
  router.afterEach((to, from) => {
    const routeStore = useRouteStore()
    // 场景1：在当前页面修改查询参数
    // 从 /user?page=1 到 /user?page=2
    // fullPath 会不同，但实际是同一个页面
    // 场景2：点击当前页面的路由链接
    // 当前在 /user，又点击了 /user 的链接
    // fullPath 相同，不需要处理缓存
    // 所以，避免在"伪跳转"时执行不必要的缓存相关操作
    if (to.fullPath !== from.fullPath) {
      // 只处理最后一个匹配的路由（当前实际渲染的组件）
      const currentRoute = to.matched.at(-1)
      const componentName = currentRoute?.components?.default.name
      if (currentRoute?.meta?.keepAlive) {
        if (componentName) {
          routeStore.addKeepAliveName(componentName)
        }
        else {
          console.warn('该页面组件未设置组件名，会导致缓存失效，请检查')
        }
      }
      else {
        if (componentName) {
          routeStore.removeKeepAliveName(componentName)
        }
      }
    }
  })
}

export default function setupGuards(router: Router) {
  setupTitle(router)
  setupAuth(router)
  setupKeepAlive(router)
}
