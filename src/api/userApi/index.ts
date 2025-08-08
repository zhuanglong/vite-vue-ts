import type { LoginDTO, UserInfoVO } from './types'
import type { ApiResult } from '@/utils/request'
import { getAppInfo } from '@/utils/appEnv'

import { httpClient } from '@/utils/request'

const { apiPrefix } = getAppInfo()

export function login(params: LoginDTO) {
  return httpClient.post<ApiResult<UserInfoVO>>(`${apiPrefix}/user/login`, params)
}

export function logout() {
  return httpClient.post<ApiResult<null>>(`${apiPrefix}/user/logout`)
}
