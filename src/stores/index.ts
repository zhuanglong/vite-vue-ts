import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export function setupStore(app: App<Element>) {
  const store = createPinia()
  store.use(createPersistedState({
    key: id => `__vite-vue-ts__${id}`,
  }))
  app.use(store)
}
