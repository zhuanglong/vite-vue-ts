<template>
  <VanConfigProvider :theme="designSettingStore.darkMode" :theme-vars="themeVars">
    <KeepAliveLayout />
  </VanConfigProvider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import KeepAliveLayout from '@/layouts/KeepAliveLayout.vue'

import { useDesignSettingStore } from '@/stores/designSetting'

const designSettingStore = useDesignSettingStore()

const themeVars = computed(() => {
  const appTheme = designSettingStore.appTheme
  return {
    actionSheetCancelTextColor: appTheme,
    buttonPrimaryBackground: appTheme,
    buttonPrimaryBorderColor: appTheme,
    radioCheckedIconColor: appTheme,
    sliderActiveBackground: appTheme,
    cascaderActiveColor: appTheme,
    checkboxCheckedIconColor: appTheme,
    numberKeyboardButtonBackground: appTheme,
    pickerLoadingIconColor: appTheme,
    calendarRangeEdgeBackground: appTheme,
    calendarRangeMiddleColor: appTheme,
    calendarSelectedDayBackground: appTheme,
    stepperButtonRoundThemeColor: appTheme,
    switchOnBackground: appTheme,
    dialogConfirmButtonTextColor: appTheme,
    dropdownMenuOptionActiveColor: appTheme,
    dropdownMenuTitleActiveTextColor: appTheme,
    notifyPrimaryBackground: appTheme,
    circleColor: appTheme,
    noticeBarBackground: appTheme,
    noticeBarTextColor: appTheme,
    progressColor: appTheme,
    progressPivotBackground: appTheme,
    stepActiveColor: appTheme,
    stepFinishLineColor: appTheme,
    swipeIndicatorActiveBackground: appTheme,
    tagPrimaryColor: appTheme,
    navBarIconColor: appTheme,
    navBarTextColor: appTheme,
    paginationItemDefaultColor: appTheme,
    sidebarSelectedBorderColor: appTheme,
    tabsDefaultColor: appTheme,
    tabsBottomBarColor: appTheme,
    tabbarItemActiveColor: appTheme,
    treeSelectItemActiveColor: appTheme,
  }
})
</script>

<style lang="scss">
// 全局样式
@import "./styles/common";
// 字体
@import "./assets/fonts/font.css";
// 字体图标
@import "./assets/iconfont/iconfont.css";
</style>
