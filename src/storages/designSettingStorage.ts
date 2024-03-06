import { LocalStorage } from '@/utils/storage';
import type { DesignSettingState } from '@/stores/designSetting';

export default new LocalStorage<Omit<DesignSettingState, 'appThemeList'>>('DESIGN-SETTING', {
  // 需要同步修改 index.html 的默认值
  darkMode: 'light',
  appTheme: '#5d9dfe',
});
