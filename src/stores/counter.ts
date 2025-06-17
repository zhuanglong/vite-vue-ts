import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import counterStorage from '@/storages/counterStorage'

export const useCounterStore = defineStore(
  'counterStore',
  () => {
    const count = ref<number>(counterStorage.getItem())

    const evenOrOdd = computed(() => count.value % 2 === 0 ? 'even' : 'odd')

    function increase() {
      count.value++
      counterStorage.setItem(count.value)
    }

    function decrease() {
      count.value--
      counterStorage.setItem(count.value)
    }

    function decreaseAsync() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          decrease()
          resolve()
        }, 2000)
      })
    }

    return {
      count,
      evenOrOdd,
      increase,
      decrease,
      decreaseAsync,
    }
  },
)
