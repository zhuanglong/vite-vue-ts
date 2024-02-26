import { createPinia } from 'pinia';
import type { App } from 'vue';

export const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { useCounter } from './counter';
