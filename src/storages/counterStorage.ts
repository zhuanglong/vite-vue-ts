import { LocalStorage } from '@/utils/storage';

const counterStorage = new LocalStorage<number>('counter', 0);

export default counterStorage;
