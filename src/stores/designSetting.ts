import { defineStore } from 'pinia'
import { ref } from 'vue'
import designSettingStorage from '@/storages/designSettingStorage'

export interface DesignSettingState {
  // 暗黑模式
  darkMode: 'light' | 'dark'
  // 主题色
  appTheme: string
  // 主题色列表
  appThemeList: string[]
}

const storage = designSettingStorage.getItem()

export const useDesignSettingStore = defineStore(
  'designSettingStore',
  () => {
    const darkMode = ref<DesignSettingState['darkMode']>(storage.darkMode)
    const appTheme = ref<DesignSettingState['appTheme']>(storage.appTheme)
    const appThemeList = ref<DesignSettingState['appThemeList']>([
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
    ])

    function setDarkMode(mode: DesignSettingState['darkMode']) {
      darkMode.value = mode
      designSettingStorage.setItem({
        darkMode: mode,
        appTheme: appTheme.value,
      })
    }

    function setAppTheme(theme: DesignSettingState['appTheme']) {
      appTheme.value = theme
      designSettingStorage.setItem({
        darkMode: darkMode.value,
        appTheme: theme,
      })
    }

    return {
      darkMode,
      appTheme,
      appThemeList,
      setDarkMode,
      setAppTheme,
    }
  },
)
