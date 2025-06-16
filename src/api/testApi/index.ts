// import useSWR from 'swr';

import type { IPInfo } from './types'
import type { ApiResult } from '@/utils/request'
import { getAppInfo } from '@/utils/appEnv'
import { httpClient } from '@/utils/request'

const { apiPrefix } = getAppInfo()

export function getIP() {
  return httpClient.get<IPInfo>('http://ip-api.com/json')
}

export async function getRandomColor() {
  try {
    const res = await httpClient.post<ApiResult<string>>(`${apiPrefix}/test/random`)
    if (res.code === 0) {
      return res.data
    }
    return ''
  }
  catch {
    return ''
  }
}

// export const useGetRandomColor = () => {
//   return useSWR(
//     `${apiPrefix}/test/random`,
//     async (url) => {
//       try {
//         const res = await httpClient.post<ApiResult<string>>(url);
//         if (res.code === 0) {
//           return res.data;
//         }
//         return '';
//       } catch (error) {
//         return '';
//       }
//     },
//     { suspense: true },
//   );
// };
