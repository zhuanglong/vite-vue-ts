import { resolve } from 'node:path'
import process from 'node:process'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import viewport from 'postcss-mobile-forever'
// import esbuild from 'rollup-plugin-esbuild';
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
// import legacy from '@vitejs/plugin-legacy';
import { defineConfig, loadEnv } from 'vite'
// import compressPlugin from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 加载 .env 环境变量
  const env = loadEnv(mode, './') as unknown as ImportMetaEnv
  const isBuild = command === 'build'
  const isBuildReport = mode === 'analyze'

  return {
    base: './',

    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      Components({
        resolvers: [VantResolver()],
        dirs: [],
        dts: 'types/vant-components.d.ts',
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, './src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock/modules',
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_NAME,
          },
        },
      }),
      isBuildReport
      && visualizer({
        filename: `dist/report.html`,
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
      // !isBuildReport &&
      //   isBuild &&
      //   compressPlugin({
      //     ext: '.gz',
      //     filter: /\.(js|css)$/i,
      //     threshold: 10240,
      //     deleteOriginFile: true,
      //   }),
      // 解决 dev 模式无法在 Chrome 70 下使用 optional chaining 语法，https://github.com/vitejs/vite/issues/5222
      // 安卓：Chrome/69.x.x，如需在钉钉上调试，请启用 esbuild
      // 截止 20240308(已支持)：安卓：DingTalk/7.5.5.12 Chrome/100.0.xx，Windows：DingTalk/7.5.10 Chrome/91.0.xx
      // {
      //   ...esbuild({ target: 'chrome70' }),
      //   enforce: 'post',
      // },
      // legacy(),
    ],

    css: {
      // 引入预处理全局 CSS
      // https://cn.vitejs.dev/config/#css-preprocessoroptions
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/styles/mixin/index.scss";
          `,
        },
      },
      postcss: {
        plugins: [
          // 解决打包警告 `"@charset" must be the first rule in the file`
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
          autoprefixer(),
          // https://github.com/wswmsword/postcss-mobile-forever
          // https://github.com/wswmsword/postcss-mobile-forever/issues/29#issuecomment-2023036716
          viewport({
            appSelector: '#app',
            viewportWidth: 375,
            maxDisplayWidth: 600,
            mobileUnit: 'rem',
            rootContainingBlockSelectorList: ['.van-popup--center', '.van-popup--bottom', '.van-tabbar'],
            border: true,
            // exclude: [/node_modules\/vant\//],
            // valueBlackList: ['1px solid'], // 属性值包含 '1px solid' 的内容不会转换
            // selectorBlackList: ['.ignore', 'keep-px'], // 类名中含有'keep-px'以及'.ignore'类都不会被转换
          }),
        ],
      },
    },

    resolve: {
      alias: {
        '@': resolve(process.cwd(), 'src'),
      },
    },

    define: {
      __APP_NAME__: JSON.stringify(env.VITE_APP_NAME),
    },

    server: {
      host: '0.0.0.0',
      proxy: {
        '/dev-api': {
          target: 'http://uat.xxx.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/dev-api/, ''),
        },
      },
    },

    build: {
      // 解决钉钉 webview(Chrome/69.x.x) “SyntaxError: Unexpected token ?” 错误
      // 截止 20240308(已支持)
      // target: 'chrome70',

      // assetsInlineLimit: 10240, // 对 .svg 不生效

      // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式
      // https://cn.vitejs.dev/config/#build-csstarget
      cssTarget: 'chrome61',

      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: true,

      // chunk 大小警告的限制（以 kbs 为单位）
      // chunkSizeWarningLimit: 2000,

      // https://rollupjs.org/guide/en/#outputoptions-object
      rollupOptions: {
        // 静态资源分类打包
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          // 资源文件像 字体，图片等
          assetFileNames: (info) => {
            if (info.name?.endsWith('.css')) {
              return 'css/[name]-[hash].[ext]'
            }
            return 'assets/[name]-[hash].[ext]'
          },
          // 将 node_modules 三方依赖包最小化拆分
          // manualChunks(id) {
          //   if (id.includes('node_modules')) {
          //     const paths = id.toString().split('node_modules/');
          //     if (paths[2]) {
          //       return paths[2].split('/')[0].toString();
          //     }
          //     return paths[1].split('/')[0].toString();
          //   }
          // },
        },
      },
    },
  }
})
