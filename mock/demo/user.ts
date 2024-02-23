import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

import { resultSuccess } from '../_util';

export default [
  // 登录
  {
    url: '/dev-api/user/login',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({
        // token 采用的是 JWT 的跨域认证解决方案 https://jwt.io/
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODEyODhkMzU3OGJiMDA1YTc5Y2RjMSIsInVzZXJOYW1lIjoicHdzdHJpY2tAMTYzLmNvbSIsInJlYWxOYW1lIjoic3RyaWNrIiwiaWF0IjoxNjA5MDY5ODQ0LCJleHAiOjE2MDkxMTMwNDR9.H8WtilifQQEighczhXtpA_W-YP0Nm4Ci48OITRlmnCg',
        date: '@datetime',
        username: Random.name(),
        avatar: 'https://img0.baidu.com/it/u=3376612412,3331842818&fm=26&fmt=auto&gp=0.jpg',
        gender: 1,
        country: '中国',
        province: '广东省',
      });
    },
  },
  // 登出
  {
    url: '/dev-api/user/logout',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(null);
    },
  },
] as MockMethod[];
