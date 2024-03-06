<template>
  <div class="ThemeSetting-page">
    <NavBar />
    <div class="container">
      <van-divider>主题模式</van-divider>
      <van-cell center title="暗黑模式">
        <template #right-icon>
          <van-switch v-model="getDarkMode" />
        </template>
      </van-cell>

      <van-divider>系统主题色</van-divider>
      <div flex="~" justify="center">
        <div grid="~ cols-8 gap-2">
          <span
            v-for="(item, index) in designSettingStore.appThemeList"
            :key="index"
            h="9"
            w="9"
            items-center
            border="2 rounded-md"
            flex="~"
            justify="center"
            cursor="pointer"
            :style="{ 'background-color': item }"
            @click="toggleTheme(item)"
          >
            <i
              v-show="item === designSettingStore.appTheme"
              class="i-ic:sharp-check"
              text-2xl
              text-white
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  import NavBar from '@/components/NavBar';
  import { type DesignSettingState, useDesignSettingStore } from '@/stores/designSetting';

  const designSettingStore = useDesignSettingStore();

  const getDarkMode = computed({
    get: () => designSettingStore.darkMode === 'dark',
    set: (value) => {
      const darkMode = value ? 'dark' : 'light';
      designSettingStore.setDarkMode(darkMode);
      updateDarkSign(darkMode);
    },
  });

  // html 根标签上挂载 暗/亮 属性标识
  function updateDarkSign(mode: DesignSettingState['darkMode']) {
    const htmlRoot = document.getElementById('htmlRoot');
    if (htmlRoot) {
      htmlRoot.setAttribute('data-theme', mode);
    }
  }

  function toggleTheme(color: DesignSettingState['appTheme']) {
    designSettingStore.setAppTheme(color);
  }
</script>

<style lang="scss" scoped></style>
