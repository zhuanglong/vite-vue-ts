import { useRoute } from 'vue-router'

export function useRouteTitle() {
  const route = useRoute()
  return route.meta.title
}
