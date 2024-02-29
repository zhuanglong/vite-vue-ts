import { onActivated } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

export function useCacheScrollPosition() {
  let top = 0;

  // 不要使用 deactivated 生命周期，在这个生命周期里组件已经切换了，最后获取的是切换后的页面滚动条位置。
  onBeforeRouteLeave(() => {
    top = document.documentElement.scrollTop || document.body.scrollTop;
  });

  onActivated(() => {
    const root = document.documentElement || document.body;
    root.scrollTop = top;
  });
}
