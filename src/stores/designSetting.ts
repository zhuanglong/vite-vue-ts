import { defineStore } from 'pinia';

import { store } from '@/stores';
import designSettingStorage from '@/storages/designSettingStorage';

export interface DesignSettingState {
  // 暗黑模式
  darkMode: 'light' | 'dark';
  // 主题色
  appTheme: string;
  // 主题色列表
  appThemeList: string[];
}

const storage = designSettingStorage.getItem();

export const useDesignSettingStore = defineStore({
  id: 'designSettingStore',

  state: (): DesignSettingState => ({
    darkMode: storage.darkMode,
    appTheme: storage.appTheme,
    appThemeList: [
      '#5d9dfe',
      '#2d8cf0',
      '#0960bd',
      '#0084f4',
      '#009688',
      '#536dfe',
      '#ff5c93',
      '#ee4f12',
      '#0096c7',
      '#9c27b0',
      '#ff9800',
      '#FF3D68',
      '#00C1D4',
      '#18a058',
      '#78DEC7',
      '#1768AC',
      '#FB9300',
      '#FC5404',
      '#8675ff',
    ],
  }),

  actions: {
    setDarkMode(darkMode: DesignSettingState['darkMode']) {
      this.darkMode = darkMode;
      designSettingStorage.setItem({
        darkMode,
        appTheme: this.appTheme,
      });
    },
    setAppTheme(appTheme: DesignSettingState['appTheme']) {
      this.appTheme = appTheme;
      designSettingStorage.setItem({
        darkMode: this.darkMode,
        appTheme,
      });
    },
  },
});

// 可在组件外使用
export function useDesignSettingStoreWithOut() {
  return useDesignSettingStore(store);
}
