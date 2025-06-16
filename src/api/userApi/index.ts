import type { ReqLogin, ResLogout, ResUserInfo } from './types'
import type { ApiResult } from '@/utils/request'
import { getAppInfo } from '@/utils/appEnv'

import { httpClient } from '@/utils/request'

const { apiPrefix } = getAppInfo()

export function login(params: ReqLogin) {
  return httpClient.post<ApiResult<ResUserInfo>>(`${apiPrefix}/user/login`, params)
}

export function logout() {
  return httpClient.post<ApiResult<ResLogout>>(`${apiPrefix}/user/logout`)
}
