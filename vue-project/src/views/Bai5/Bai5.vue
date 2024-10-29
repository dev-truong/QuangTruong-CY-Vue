<script setup>
import { ref } from 'vue'

  const textColor = ref(false)
</script>

<template>
  <div class="container">
    <label for="check" :style="textColor ? {color: 'blue', fontWeight: 'bold'} : {color: 'red'}">Thay Đổi Màu Chữ</label>
    <input type="checkbox" v-model="textColor" id="check">

  </div>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  label{
    font-size: 20px;
    margin-right: 10px;
  }
  input {
    transform: scale(2);
  }
</style>
