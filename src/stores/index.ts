import type { App } from 'vue'
import { createPinia } from 'pinia'

export function setupStore(app: App<Element>) {
  app.use(createPinia())
}
