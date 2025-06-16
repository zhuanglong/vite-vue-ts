import type { ResUserInfo } from '@/api/userApi/types'

import { defineStore } from 'pinia'
import userInfoStorage from '@/storages/userInfoStorage'

import { store } from '@/stores'

interface UserState {
  userInfo: ResUserInfo | null
}

export const useUserStore = defineStore({
  id: 'userStore',

  state: (): UserState => ({
    userInfo: userInfoStorage.getItem(),
  }),

  actions: {
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
      userInfoStorage.setItem(userInfo)
    },
  },
})

// 可在组件外使用
export function useUserStoreWithOut() {
  return useUserStore(store)
}
