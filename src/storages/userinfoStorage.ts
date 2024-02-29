import { LocalStorage } from '@/utils/storage';
import { ResUserInfo } from '@/api/userApi/types';

const userInfoStorage = new LocalStorage<ResUserInfo | null>('userInfo', null);

export default userInfoStorage;
