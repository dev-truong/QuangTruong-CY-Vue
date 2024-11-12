<script setup>
import { ref, watch, onBeforeUnmount } from 'vue';

const inputTime = ref(0);
const timeLeft = ref(0);
const isCounting = ref(false);

let countdownInterval = null;

function startCountdown() {
  if (inputTime.value > 0) {
    timeLeft.value = inputTime.value;
    isCounting.value = true;

    countdownInterval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        clearInterval(countdownInterval);
        isCounting.value = false;
      }
    }, 1000);
  }
}

function stopCountdown() {
  clearInterval(countdownInterval);
  isCounting.value = false;
}

onBeforeUnmount(() => {
  clearInterval(countdownInterval);
});

watch(timeLeft, (newValue) => {
  if (newValue === 0) {
    isCounting.value = false;
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-3xl font-bold mb-4">Đồng hồ đếm ngược</h1>

    <div class="mb-4">
      <input
        v-model.number="inputTime"
        type="number"
        min="1"
        placeholder="Nhập số giây"
        class="w-40 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
      />
    </div>

    <div v-if="timeLeft > 0" class="text-2xl font-bold text-blue-500 mb-4">
      {{ timeLeft }} giây
    </div>
    <div v-else-if="timeLeft === 0 && isCounting" class="text-2xl font-bold text-red-500 mb-4">
      Hết thời gian!
    </div>

    <button
      @click="startCountdown"
      class="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition mb-4"
    >
      Bắt đầu đếm ngược
    </button>
    <button
      v-if="isCounting"
      @click="stopCountdown"
      class="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition"
    >
      Dừng
    </button>
  </div>
</template>

<style scoped>
</style>
