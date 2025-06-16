export {}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    // keep-alive 标签的 include 属性是根据组件的 name 判断的，
    // 所以 index.vue 和 list.vue 等页面 vue 文件里一定要写上 name（默认为文件名），
    // 并且与 router 路由表中使用的 name 属性 一致，否则无效
    // Vue 3.3 中新引入了 defineOptions 宏声明 name 属性
    // https://gist.github.com/sxzz/3995fc7251567c7c95de35f45539b9c2
    keepAlive?: boolean
    ignoreAuth?: boolean
    icon?: string // 菜单图标
    cacheScrollPosition?: boolean // 缓存滚动条位置
  }
}

// https://juejin.cn/post/7174751095795744824
declare module 'vue' {
  export interface ComponentCustomProperties {
    $px2rem: Window['$px2rem']
  }
}
