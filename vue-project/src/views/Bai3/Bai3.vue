<script setup>
import { ref } from 'vue'

const sizeText = ref(16)

</script>

<template>
  <div class="container">
    <h2>Nhập Số Để Thay Đổi Cỡ Chữ</h2>
    <input type="number" v-model="sizeText">
    <p :style="{'font-size' : sizeText + 'px'}">My name is Truong</p>
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
</style>
