import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCounterStore2 = defineStore('counterStore2', () => {
const count = ref(0)
function increment() {
  count.value++
}

return {
  count,
  increment,
}
})
export default useCounterStore2
