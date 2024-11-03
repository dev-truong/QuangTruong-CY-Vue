<script setup>
import { reactive, computed, watch } from 'vue';

const form = reactive({
  email: '',
  password: ''
});

const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(form.email);
});

const isPasswordValid = computed(() => form.password.length >= 6);

const isFormValid = computed(() => isEmailValid.value && isPasswordValid.value);

let emailError = '';
let passwordError = '';

watch(
  () => form.email,
  (newEmail) => {
    emailError = !isEmailValid.value && newEmail ? 'Email không hợp lệ' : '';
  }
);

watch(
  () => form.password,
  (newPassword) => {
    passwordError = !isPasswordValid.value && newPassword ? 'Mật khẩu phải có ít nhất 6 ký tự' : '';
  }
);

function handleSubmit() {
  if (isFormValid.value) {
    console.log('Email:', form.email);
    console.log('Mật khẩu:', form.password);
    alert('Đăng ký thành công!');
    form.email = '';
    form.password = '';
  }
}
</script>
<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <form @submit.prevent="handleSubmit" class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Đăng ký</h2>

      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập email của bạn"
        />
        <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
      </div>

      <div class="mb-6">
        <label for="password" class="block text-gray-700 font-semibold mb-2">Mật khẩu</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập mật khẩu của bạn"
        />
        <p v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</p>
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Đăng ký
      </button>
    </form>
  </div>
</template>

<style scoped>
</style>
