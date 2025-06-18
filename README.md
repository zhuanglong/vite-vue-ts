# vite-vue-ts 移动端模板

## 特点

- 基于最新的 `Vite5`、`Vue3`、`Vant4`、`Pinia2`、`TypeScript`、`UnoCSS` 等主流技术开发
- 集成代码规范检查 `ESLint`、`Prettier`、`StyleLint`、`simple-git-hooks`，多人协作风格统一
- 路由守卫，集成登录和登出，登录状态持久化
- 动态 `Route Keepalive`，`页面滚动条缓存`，提升页面切换体验
- 移动端适配 postcss-mobile-forever
- 暗黑主题，可在 `.van-theme-light` 和 `.van-theme-dark` 中配置不同的 css variables
- Mock Server 模拟数据方案，可在生产模式中使用

## 使用

```
# clone
git clone https://github.com/zhuanglong/vite-vue-ts.git

# 切换到项目
cd vite-vue-ts

安装依赖
# yarn install

# 运行
yarn dev
```

## VS Code 配套插件

建议安装推荐插件来提高开发效率及代码格式化

## 提交校验（可选）

首次 clone 代码 yarn install 后需要执行以下命令来更新 git hooks

```
# Update ./git/hooks
yarn postinstall
```

修改 "simple-git-hooks": {} 配置需要执行 yarn updatehooks 更新

## 预览

https://vite-vue-ts-jeff.netlify.app/

https://vite-vue-ts-jeff.vercel.app/

## Todo List

- [x] [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever) 根号的适配移动端
