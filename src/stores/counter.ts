import { defineStore } from 'pinia';

import { store } from '@/stores';
import counterStorage from '@/storages/counterStorage';

interface CounterState {
  count: number;
}

export const useCounterStore = defineStore({
  id: 'counterStore',

  state: (): CounterState => ({
    count: counterStorage.getItem(),
  }),

  getters: {
    evenOrOdd(): string {
      return this.count % 2 === 0 ? 'even' : 'odd';
    },
  },

  actions: {
    increase() {
      this.count++;
      counterStorage.setItem(this.count);
    },
    decrease() {
      this.count--;
      counterStorage.setItem(this.count);
    },
    decreaseAsync() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          this.decrease();
          resolve();
        }, 2000);
      });
    },
  },
});

// 可在组件外使用
export function useCounterStoreWithOut() {
  return useCounterStore(store);
}
