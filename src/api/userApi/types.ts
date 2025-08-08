export interface LoginDTO {
  username: string
  password: string
}

export type ResLogout = null

export interface UserInfoVO {
  token: string
  date: string
  username: string
  avatar: string
  gender: 0 | 1
  country: string
  province: string
  roles: string[]
}
