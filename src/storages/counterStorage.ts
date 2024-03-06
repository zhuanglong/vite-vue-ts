import { LocalStorage } from '@/utils/storage';

export default new LocalStorage<number>('COUNTER', 0);
