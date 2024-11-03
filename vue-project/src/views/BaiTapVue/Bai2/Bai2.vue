<script setup>
  import { ref } from 'vue'

  const countClick =ref(0)
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full min-h-screen">
    <div>Số lần nhấp chuột: {{countClick}}</div>
    <button v-on:click="countClick++" class="bg-blue-400 rounded-md px-2 text-white mt-2">Click</button>

  </div>
</template>

<style scoped>

</style>
