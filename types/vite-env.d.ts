/// <reference types="vite/client" />

// 扩充 ViteEnv 类型
// https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
interface ImportMetaEnv {
  // .env.xx 全局环境变量
  VITE_APP_ENV: 'dev' | 'prod' | 'staging' | 'analyze';
  VITE_APP_NAME: string;
  VITE_API_PREFIX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_NAME__: string;
