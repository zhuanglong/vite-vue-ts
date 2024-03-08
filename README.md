# vite-vue-ts 移动端模板

## 特点
- 基于最新的 `Vite5`、`Vue3`、`Vant4`、`Pinia2`、`TypeScript`、`UnoCSS` 等主流技术开发
- 集成代码规范检查 `ESLint`、`Prettier`、`StyleLint`、`simple-git-hooks`，多人协作风格统一
- 路由守卫，集成登录和登出，登录状态持久化
- 动态 `Route Keepalive`，`页面滚动条缓存`，提升页面切换体验
- 移动端适配(rem+vw+postcss-pxtorem)，通过 @media 限制桌面端或横屏下的 max-width，居中显示
- 暗黑主题，可在 `.van-theme-light` 和 `.van-theme-dark` 中配置不同的 css variables
- Mock Server 模拟数据方案，可在生产模式中使用

## 使用

```
# clone
git clone https://github.com/zhuanglong/vite-vue-ts.git

# 切换到项目
cd vite-vue-ts

安装依赖
# pnpm install

# 运行
pnpm dev
```

## VS Code 配套插件

建议安装推荐插件来提高开发效率及代码格式化

## 预览

https://vite-vue-ts-jeff.netlify.app/

https://vite-vue-ts-jeff.vercel.app/
