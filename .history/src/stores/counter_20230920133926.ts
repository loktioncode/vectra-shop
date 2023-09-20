import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    name: '张三',
    username: 'zhangsan'
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    }
  }
})


