import { httpClient, ApiResult } from '@/utils/request';
import { getAppInfo } from '@/utils/appEnv';

import { ReqLogin, ResLogout, ResUserInfo } from './types';

const { apiPrefix } = getAppInfo();

export function login(params: ReqLogin) {
  return httpClient.post<ApiResult<ResUserInfo>>(`${apiPrefix}/user/login`, params);
}

export function logout() {
  return httpClient.post<ApiResult<ResLogout>>(`${apiPrefix}/user/logout`);
}
