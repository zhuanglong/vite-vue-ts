import { defineStore } from 'pinia';

import { store } from '@/stores';
import counterStorage from '@/storages/counterStorage';

interface CounterState {
  count: number;
}

export const useCounter = defineStore({
  id: 'counter',

  state: (): CounterState => ({
    count: counterStorage.getItem(),
  }),

  getters: {
    evenOrOdd(): string {
      return this.count % 2 === 0 ? 'even' : 'odd';
    },
  },

  actions: {
    increment() {
      this.count++;
      counterStorage.setItem(this.count);
    },
    decrement() {
      this.count--;
      counterStorage.setItem(this.count);
    },
    incrementAsync() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          this.increment();
          resolve();
        }, 2000);
      });
    },
  },
});

// 可在组件外使用
export function useCounterWithOut() {
  return useCounter(store);
}
