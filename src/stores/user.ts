import type { ResUserInfo } from '@/api/userApi/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import userInfoStorage from '@/storages/userInfoStorage'

export const useUserStore = defineStore(
  'userStore',
  () => {
    const userInfo = ref<ResUserInfo | null>(userInfoStorage.getItem())

    function setUserInfo(info: ResUserInfo | null) {
      userInfo.value = info
      userInfoStorage.setItem(info)
    }

    return {
      userInfo,
      setUserInfo,
    }
  },
)
