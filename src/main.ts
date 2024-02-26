// 全局样式
import './styles/normalize.css';
import './styles/common.scss';

// 字体
import './assets/fonts/font.css';
// 字体图标
import './assets/iconfont/iconfont.css';

// vant 函数组件样式
import 'vant/es/toast/style';
// vant 桌面端适配
import '@vant/touch-emulator';

// 移动端适应，手动转换 rem
import './styles/flexible/flexible.js';

import { createApp } from 'vue';
import App from './App.vue';

import { isProdMode } from '@/utils/appEnv.ts';

// MockData
import { setupProdMockServer } from '../mock/_createProductionServer';
if (isProdMode()) {
  setupProdMockServer();
}

createApp(App).mount('#app');
