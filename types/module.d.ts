export {}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    roles?: string[]
    ignoreAuth?: boolean
    icon?: string // 菜单图标
    // keep-alive include 是根据组件的 name 判断的，所以组件里一定要写上 name，
    // Vue 3.3 中新引入了 defineOptions 宏声明 name 属性
    // https://gist.github.com/sxzz/3995fc7251567c7c95de35f45539b9c2
    keepAlive?: boolean
    cacheScrollPosition?: boolean // 缓存滚动条位置
  }
}

// https://juejin.cn/post/7174751095795744824
declare module 'vue' {
  export interface ComponentCustomProperties {
    $px2rem: Window['$px2rem']
  }
}
