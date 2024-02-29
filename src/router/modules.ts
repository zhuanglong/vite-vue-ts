// /* chunkFileNames: "testHome" */ 和 /* webpackChunkName: "testAbout" */ 都不生效
// 例如 About/index.vue 打包后是 index.xxxx.js，理想效果应该是 About.xxxx.js，所以只能改文件名 index.js => About.js
import type { RouteRecordRaw } from 'vue-router';

// import EmptyLayout from '@/layouts/EmptyLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export const mainMenuRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/Home/Home.vue'),
    meta: {
      title: '首页',
      icon: 'wap-home',
      keepAlive: true,
      cacheScrollPosition: true,
    },
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/pages/Message/Message.vue'),
    meta: {
      title: '消息',
      icon: 'chat',
      keepAlive: true,
      cacheScrollPosition: true,
    },
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/pages/Mine/Mine.vue'),
    meta: {
      title: '我的',
      icon: 'manager',
      keepAlive: true,
      hideNavbar: true,
      cacheScrollPosition: true,
    },
  },
];

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/home',
    children: mainMenuRoutes,
  },
  {
    path: '/assets-demo',
    name: 'AssetsDemo',
    component: () => import('@/pages/AessetsDemo/AssetsDemo.vue'),
    meta: {
      title: 'Assets Demo',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/Login.vue'),
    meta: {
      title: '登录',
      ignoreAuth: true,
    },
  },
  {
    path: '/:path(.*)*',
    component: () => import('@/pages/NotFound/NotFound.vue'),
    meta: {
      title: 'Not Found',
      ignoreAuth: true,
    },
  },
];
