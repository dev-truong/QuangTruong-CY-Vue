<script setup>

import { onMounted, ref } from 'vue'
import { get } from '@/services/service.js'
import {userService} from '@/services/userService.js'

const email = ref('')
const password = ref('')
// onMounted(() => {
//   const res = get('/latest/USD')
//   console.log(res.data);
// })
async function handleSubmit() {
  const data = {
    email : email.value,
    password: password.value
  }
  try {
    const res = await userService.login(data)
    localStorage.setItem('token', JSON.stringify(res.data.token))
  }
  catch (error) {
    console.log(error)
  }
}
</script>

<template>
<div class="mt-4">
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center justify-center">
    <input v-model="email" type="email" placeholder="Email" class="border" />
    <br>
    <input v-model="password" type="password" placeholder="Password" class="border" />
    <br>
    <button class="border">Click</button>
  </form>
</div>
</template>

<style scoped>

</style>
