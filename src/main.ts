import { createApp } from 'vue'

import SvgIcon from '~virtual/svg-component'

// MockData
import { isProdMode } from '@/utils/appEnv.ts'
import { setupProdMockServer } from '../mock/createProductionServer'

import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'

// vant
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import '@vant/touch-emulator'

// 注: 钉钉 webview(Chrome/69.x.x) 不支持 Promise.allsettled
// 截止 20240308(已支持)
// import allSettled from 'promise.allsettled';
// allSettled.shim();

// UnoCSS
// https://unocss.dev/guide/style-reset#tailwind-compat
// 此重置基于 Tailwind 重置，减去按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。请参阅链接的问题。
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

// 移动端适应，手动转换 rem
import './styles/flexible.js'

if (isProdMode()) {
  setupProdMockServer()
}

async function bootstrap() {
  const app = createApp(App)
  // 挂载全局变量
  app.config.globalProperties.$px2rem = window.$px2rem
  // 挂载状态管理
  setupStore(app)
  // 挂载路由
  setupRouter(app)
  // 组件
  app.component(SvgIcon.name as string, SvgIcon)
  app.mount('#app')
}

bootstrap()
