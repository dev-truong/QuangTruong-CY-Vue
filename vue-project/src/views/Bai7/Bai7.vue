<script setup>
import { computed, reactive, watch, ref } from 'vue';

const inputForm = reactive({
  fullName: '',
  email: '',
  phone: '',
  password: '',
  rePassword: '',
});

const isFullfilled = ref(false);

const checkPassword = computed(() => {
  return form.password.length < 8;
});

function alertNofi() {
  alert('Form đã hoàn tất');
}

const isValidForm = () => {
  return (
    inputForm.fullName.length >= 1 &&
    inputForm.email.length >= 1 &&
    inputForm.phone.length >= 1 &&
    inputForm.password.length >= 8 &&
    inputForm.password === form.rePassword
  );
};

watch(
  () => inputForm,
  () => {
    isFullfilled.value = isValidForm();
  },
  { deep: true }
);

function submitForm() {
  if (isValidForm()) {
    alertNofi();
  }
}
</script>

<template>
  <div class="register-form">
    <h2>Đăng Ký</h2>
    <form @submit="submitForm">
      <div class="field-form">
        <label for="name">Họ Tên:</label>
        <input v-model="name" type="text" id="name" required />
      </div>

      <div class="field-form">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>

      <div class="field-form">
        <label for="phone">Số Điện Thoại:</label>
        <input v-model="phone" type="tel" id="phone" required />
      </div>

      <div class="field-form">
        <label for="password">Mật Khẩu:</label>
        <input v-model="password" type="password" id="password" required />
      </div>

      <div class="field-form">
        <label for="rePassword">Xác Nhận Mật Khẩu:</label>
        <input v-model="rePassword" type="password" id="rePassword" required />
      </div>

      <button type="submit"
              :class="{ 'btn-disabled': checkPassword, 'btn-enabled': !checkPassword }"
              :disabled="checkPassword">
        Đăng Ký
      </button>

      <p v-if="isFullfilled" class="form-complete-message">
        Form đã hoàn tất
      </p>
    </form>
  </div>
</template>

<style scoped>
.register-form {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid dodgerblue;
  border-radius: 8px;
}

h2 {
  text-align: center;
}

.field-form {
  margin-bottom: 15px;
}

.field-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.field-form input {
  width: 100%;
  padding: 8px;
  border: 1px solid deepskyblue;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.btn-disabled {
  background-color: gray;
  cursor: not-allowed;
}

.btn-enabled {
  background-color: #28a745;
}

.form-complete-message {
  color: #28a745;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
</style>
