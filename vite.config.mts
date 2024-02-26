import { resolve } from 'path';

// import legacy from '@vitejs/plugin-legacy'; // 向下兼容插件
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import { visualizer } from 'rollup-plugin-visualizer'; // 打包模块可视化分析
import compressPlugin from 'vite-plugin-compression'; // 使用 gzip 压缩资源
import { createHtmlPlugin } from 'vite-plugin-html'; // 插入数据到 index.html
import { viteMockServe } from 'vite-plugin-mock';
import postCssPxToRem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import UnpluginSvgComponent from 'unplugin-svg-component/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 加载 .env 环境变量
  const env = loadEnv(mode, './') as unknown as ImportMetaEnv;
  const isBuild = command === 'build';
  const isBuildReport = mode === 'analyze';

  return {
    base: './',

    plugins: [
      vue(),
      splitVendorChunkPlugin(),
      viteMockServe({
        mockPath: 'mock/demo',
      }),
      createHtmlPlugin({
        minify: false,
        inject: {
          data: {
            title: env.VITE_APP_NAME,
          },
        },
      }),
      UnpluginSvgComponent({
        iconDir: resolve(__dirname, './src/assets/icons'),
        preserveColor: resolve(__dirname, './src/assets/icons'),
        dts: true,
        dtsDir: resolve(__dirname, './types'),
        componentStyle: 'width: 1em; height: 1em;',
      }),
      isBuildReport &&
        visualizer({
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
      // 目前钉钉 webview 的内核是 Chrome/69.x.x，如需在钉钉上调试，请启用 esbuild
      {
        ...esbuild({ target: 'chrome70' }),
        enforce: 'post',
      },
      // legacy(),
    ],

    css: {
      // 引入预处理全局 CSS
      // https://cn.vitejs.dev/config/#css-preprocessoroptions
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/design/flexible/flexible.scss';",
        },
        // less: {
        //   javascriptEnabled: true,
        //   modifyVars: {
        //   },
        // },
      },
      postcss: {
        plugins: [
          // 解决打包警告 `"@charset" must be the first rule in the file`
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
          // postCssPxToRem({
          //   rootValue: 100, // 根据 flexible.scss 中的 1rem = 100px
          //   propList: ['*'],
          // }),
          autoprefixer(),
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
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    },

    build: {
      // 解决钉钉 webview(Chrome/69.x.x) “SyntaxError: Unexpected token ?” 错误
      target: 'chrome70',

      // assetsInlineLimit: 10240, // 对 .svg 不生效

      // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式
      // https://cn.vitejs.dev/config/#build-csstarget
      cssTarget: 'chrome61',

      // https://rollupjs.org/guide/en/#outputoptions-object
      rollupOptions: {
        output: {
          // js 和 css 文件夹分离
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
  };
});
