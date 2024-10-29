<script setup>
import { ref, watch } from 'vue'

  const num1 = ref(0);
  const num2 = ref(0);
  const sum = ref(0);
  const difference = ref(0);
  const product = ref(0);
  const quotient = ref(0);
  watch([num1, num2], () => {
    sum.value = num1.value + num2.value;
    difference.value = num1.value - num2.value;
    product.value = num1.value * num2.value;
    quotient.value = Number(num2.value) !== 0 ? Number(num1.value)/Number(num2.value) : 'error';
  })
</script>

<template>
  <div class="container">
    <h2>Nhập số</h2>
    <input type="number" v-model="num1">
    <input type="number" v-model="num2">
    <p><span>Tổng: {{sum}}</span><span>Hiệu: {{difference}}</span><span>Tích: {{product}}</span><span>Thương: {{quotient}}</span></p>
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

span{
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
}
</style>
