import { defineStore } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';
import { store } from '@/stores';

export interface RouteState {
  menus: RouteRecordRaw[];
  routes: RouteRecordRaw[];
  keepAliveComponents: string[];
}

export const useRouteStore = defineStore({
  id: 'routeStore',
  state: (): RouteState => ({
    menus: [],
    routes: [],
    keepAliveComponents: [],
  }),
  getters: {
    getMenus(): RouteRecordRaw[] {
      return this.menus;
    },
  },
  actions: {
    setRoutes(routes: RouteRecordRaw[]) {
      this.routes = routes;
    },
    setMenus(menus: RouteRecordRaw[]) {
      this.menus = menus;
    },
    setKeepAliveComponents(compNames: string[]) {
      this.keepAliveComponents = compNames;
    },
  },
});

export function useRouteStoreWidthOut() {
  return useRouteStore(store);
}
