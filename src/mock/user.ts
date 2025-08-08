import { faker } from '@faker-js/faker'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import { resultSuccess } from './util'

export default defineFakeRoute([
  // 登录
  {
    url: '/dev-api/user/login',
    method: 'post',
    timeout: 1000,
    response: () => {
      return resultSuccess({
        // token 采用的是 JWT 的跨域认证解决方案 https://jwt.io/
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODEyODhkMzU3OGJiMDA1YTc5Y2RjMSIsInVzZXJOYW1lIjoicHdzdHJpY2tAMTYzLmNvbSIsInJlYWxOYW1lIjoic3RyaWNrIiwiaWF0IjoxNjA5MDY5ODQ0LCJleHAiOjE2MDkxMTMwNDR9.H8WtilifQQEighczhXtpA_W-YP0Nm4Ci48OITRlmnCg',
        date: faker.date.past(),
        username: faker.person.fullName(),
        // avatar: faker.image.avatar(),
        avatar: 'https://img0.baidu.com/it/u=3376612412,3331842818&fm=26&fmt=auto&gp=0.jpg',
        gender: 1,
        country: '中国',
        province: '广东省',
      })
    },
  },
  // 登出
  {
    url: '/dev-api/user/logout',
    method: 'post',
    timeout: 1000,
    response: () => {
      return resultSuccess(null)
    },
  },
])
