// /* chunkFileNames: "testHome" */ 和 /* webpackChunkName: "testAbout" */ 都不生效
// 例如 About/index.vue 打包后是 index.xxxx.js，理想效果应该是 About.xxxx.js，所以只能改文件名 index.js => About.js
import type { RouteRecordRaw } from 'vue-router'

import NotFound from '@/pages/NotFound/NotFound.vue'
import NotPermission from '@/pages/NotPermission/NotPermission.vue'

export const mainMenuRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@/pages/Home/Home.vue'),
    meta: {
      title: '首页',
      icon: 'tabbar-home',
      keepAlive: true,
      cacheScrollPosition: true,
    },
    children: [
      {
        path: '/home/half-screen',
        component: () => import('@/pages/HalfScreen/HalfScreen.vue'),
        meta: {
          title: '',
        },
      },
    ],
  },
  {
    path: '/message',
    component: () => import('@/pages/Message/Message.vue'),
    meta: {
      title: '消息',
      icon: 'tabbar-chat',
      keepAlive: true,
      cacheScrollPosition: true,
    },
  },
  {
    path: '/mine',
    component: () => import('@/pages/Mine/Mine.vue'),
    meta: {
      title: '我的',
      icon: 'tabbar-mine',
      keepAlive: true,
      cacheScrollPosition: true,
    },
  },
]

const otherRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/Login/Login.vue'),
    meta: {
      title: '登录',
      ignoreAuth: true,
    },
  },
  {
    path: '/403',
    component: NotPermission,
    meta: {
      title: 'Page 403',
      ignoreAuth: true,
    },
  },
  {
    path: '/404',
    component: NotFound,
    meta: {
      title: 'Page 404',
      ignoreAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  ...otherRoutes,
  ...mainMenuRoutes,
  {
    path: '/assets-demo',
    component: () => import('@/pages/AessetsDemo/AssetsDemo.vue'),
    meta: {
      title: 'Assets Demo',
    },
  },
  {
    path: '/theme-setting',
    component: () => import('@/pages/Mine/ThemeSetting/ThemeSetting.vue'),
    meta: {
      title: '主题设置',
    },
  },
]
