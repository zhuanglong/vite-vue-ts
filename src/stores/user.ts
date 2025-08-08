import type { UserInfoVO } from '@/api/userApi/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'userStore',
  () => {
    const token = ref<string>()
    const userInfo = ref<UserInfoVO>()

    const authRoles = computed(() => userInfo.value?.roles || [])

    const setToken = (value: string) => {
      token.value = value
    }

    const clearToken = () => {
      token.value = undefined
    }

    const setUserInfo = (value: UserInfoVO) => {
      userInfo.value = value
    }

    const clearUserInfo = () => {
      userInfo.value = undefined
    }

    return {
      token,
      userInfo,
      authRoles,
      setToken,
      clearToken,
      setUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  },
)
