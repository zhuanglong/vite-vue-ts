import { LocalStorage } from '@/utils/storage';
import { ResUserInfo } from '@/api/userApi/types';

export default new LocalStorage<ResUserInfo | null>('USERINFO', null);
