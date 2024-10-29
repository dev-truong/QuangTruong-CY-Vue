<script setup>
import { computed, ref } from 'vue'

const sideLength = ref(0)
const squareArea = computed(() => {
  const side = sideLength.value
  return side * side
})
</script>

<template>
  <div class="container">
    <h2>Tính Diện Tích Hình Vuông</h2>
    <input type="number" v-model="sideLength" placeholder="nhập chiều dài cạnh">
    <div>Kết Quả: {{ squareArea }}</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
  border: 1px solid deepskyblue;
}
div{
  font-size: 20px;
  color: #007bff;
  font-weight: bold;
}
</style>
