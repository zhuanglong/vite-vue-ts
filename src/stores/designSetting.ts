import { defineStore } from 'pinia'
import { ref } from 'vue'
import designSettingStorage from '@/storages/designSettingStorage'

const storage = designSettingStorage.getItem()

export const useDesignSettingStore = defineStore(
  'designSettingStore',
  () => {
    const darkMode = ref<'light' | 'dark'>(storage.darkMode)
    const appTheme = ref<string>(storage.appTheme)
    const appThemeList = ref<string[]>([
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

    function setDarkMode(mode: 'light' | 'dark') {
      darkMode.value = mode
      designSettingStorage.setItem({
        darkMode: mode,
        appTheme: appTheme.value,
      })
    }

    function setAppTheme(theme: string) {
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
