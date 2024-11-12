import { defineStore } from 'pinia'

export const useCounterStore = defineStore('useCounterStore', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
