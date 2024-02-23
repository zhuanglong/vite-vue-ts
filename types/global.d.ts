// 扩充 Window 类型
interface Window {
  $px2rem(value: number): string;
}

declare const $px2rem: Window['$px2rem'];
