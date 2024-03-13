import 'virtual:uno.css';
// vant 函数组件样式
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
// vant 桌面端适配
import '@vant/touch-emulator';

// svg 雪碧图
import 'virtual:svg-icons-register';

// https://unocss.dev/guide/style-reset#tailwind-compat
// 此重置基于 Tailwind 重置，减去按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。请参阅链接的问题。
import '@unocss/reset/tailwind-compat.css';

// 移动端适应，手动转换 rem
import './styles/flexible/flexible.js';

// 注: 钉钉 webview(Chrome/69.x.x) 不支持 Promise.allsettled
// 截止 20240308(已支持)
// import allSettled from 'promise.allsettled';
// allSettled.shim();

// MockData
import { isProdMode } from '@/utils/appEnv.ts';
import { setupProdMockServer } from '../mock/createProductionServer';
if (isProdMode()) {
  setupProdMockServer();
}

import { createApp } from 'vue';
import App from './App.vue';

import { setupStore } from './stores';
import router, { setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App);
  // 挂载全局变量
  app.config.globalProperties.$px2rem = window.$px2rem;
  // 挂载状态管理
  setupStore(app);
  // 挂载路由
  setupRouter(app);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
  app.mount('#app', true);
}

bootstrap();
