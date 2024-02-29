import { defineStore } from 'pinia';

import { store } from '@/stores';
import userInfoStorage from '@/storages/userInfoStorage';

import { ResUserInfo } from '@/api/userApi/types';

interface State {
  userInfo: ResUserInfo | null;
}

export const useUserInfoStore = defineStore({
  id: 'userInfoStore',

  state: (): State => ({
    userInfo: userInfoStorage.getItem(),
  }),

  actions: {
    setUserInfo(userInfo: State['userInfo']) {
      this.userInfo = userInfo;
      userInfoStorage.setItem(userInfo);
    },
  },
});

// 可在组件外使用
export function useUserInfoStoreWithOut() {
  return useUserInfoStore(store);
}
