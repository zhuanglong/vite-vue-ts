// 全局样式
import './styles/normalize.css';
import './styles/common.scss';

// 字体
import './assets/fonts/font.css';
// 字体图标
import './assets/iconfont/iconfont.css';

// vant 函数组件样式
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
// vant 桌面端适配
import '@vant/touch-emulator';

// 移动端适应，手动转换 rem
import './styles/flexible/flexible.js';

// 注: 安卓钉钉 V6.3.40 WebView Chrome/69 不支持 Promise.allsettled，所以加垫片
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
