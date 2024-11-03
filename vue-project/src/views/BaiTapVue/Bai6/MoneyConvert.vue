<script setup>

</script>

<template>
<div class="max-w-md mx-auto border rounded-md shadow text-center mt-4 bg-blue-400 p-6">
  <h3 class="mb-2 text-2xl text-blue-700 font-bold">Money Convert</h3>
  <form @submit.prevent>
    <div class="mb-2">
      <label class="mr-2 block text-blue-700 text-xl">Amout </label>
      <input type="number" class="border rounded-md p-1">
    </div>
    <div class="space-x-2 mb-2">
      <label class="text-gray-800 text-xl">From</label>
      <select class="text-gray-800 text-xl">
        <option>1</option>
        <option>2</option>
      </select>
      <label class="text-gray-800 text-xl">To</label>
      <select class="text-gray-800 text-xl">
        <option>1</option>
        <option>2</option>
      </select>
    </div>
    <button class="border bg-blue-700 px-2 rounded-md text-gray-50 text-xl mb-3">Convert</button>
  </form>
  <span class="border rounded-md p-1 bg-white">Result</span>

</div>
</template>

<style scoped>

</style>
