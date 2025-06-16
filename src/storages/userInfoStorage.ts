import type { ResUserInfo } from '@/api/userApi/types'
import { LocalStorage } from '@/utils/storage'

export default new LocalStorage<ResUserInfo | null>('USERINFO', null)
