<template>
  <div class="ThemeSetting-page">
    <NavBar />
    <div class="main-content">
      <van-divider>主题模式</van-divider>
      <van-cell center title="暗黑模式">
        <template #right-icon>
          <van-switch v-model="getDarkMode" />
        </template>
      </van-cell>

      <van-divider>系统主题色</van-divider>
      <div un-flex="~" un-justify="center">
        <div un-grid="~ cols-8 gap-2">
          <span
            v-for="(item, index) in designSettingStore.appThemeList"
            :key="index"
            un-h="9"
            un-w="9"
            un-items-center="~"
            un-border="2 rounded-md"
            un-flex="~"
            un-justify="center"
            un-cursor="pointer"
            :style="{ 'background-color': item }"
            @click="toggleTheme(item)"
          >
            <i
              v-show="item === designSettingStore.appTheme"
              class="i-ic:sharp-check"
              un-text-2xl
              un-text-white
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import NavBar from '@/components/NavBar'
import { type DesignSettingState, useDesignSettingStore } from '@/stores/designSetting'

const designSettingStore = useDesignSettingStore()

const getDarkMode = computed({
  get: () => designSettingStore.darkMode === 'dark',
  set: (value) => {
    const darkMode = value ? 'dark' : 'light'
    designSettingStore.setDarkMode(darkMode)
    updateDarkSign(darkMode)
  },
})

// html 根标签上挂载 暗/亮 属性标识
function updateDarkSign(mode: DesignSettingState['darkMode']) {
  const htmlRoot = document.getElementById('htmlRoot')
  if (htmlRoot) {
    htmlRoot.classList.add(mode === 'dark' ? 'dark' : 'light')
    htmlRoot.classList.remove(mode === 'dark' ? 'light' : 'dark')
  }
}

function toggleTheme(color: DesignSettingState['appTheme']) {
  designSettingStore.setAppTheme(color)
}
</script>

<!-- <style lang="scss" scoped></style> -->
