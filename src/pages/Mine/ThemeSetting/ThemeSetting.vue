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
      <div class="theme-color-wrapper">
        <div class="theme-color-grid">
          <span
            v-for="(item, index) in designSettingStore.appThemeList"
            :key="index"
            class="theme-color-item"
            :style="{ 'background-color': item }"
            @click="toggleTheme(item)"
          >
            <SvgIcon v-show="item === designSettingStore.appTheme" name="svg-sharp-check" class="check-icon" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

<style lang="scss" scoped>
.theme-color-wrapper {
  display: flex;
  justify-content: center;
}

.theme-color-grid {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 8px;
}

.theme-color-item {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
}

.check-icon {
  font-size: 24px;
  color: #fff;
}
</style>
