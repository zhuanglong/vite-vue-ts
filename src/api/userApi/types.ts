export interface ReqLogin {
  username: string;
  password: string;
}

export type ResLogout = null;

export interface ResUserInfo {
  token: string;
  date: string;
  username: string;
  avatar: string;
  gender: 0 | 1;
  country: string;
  province: string;
}
