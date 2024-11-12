<script setup>
const emit = defineEmits()
function addNewTask() {
  emit("addNewTask")
}

</script>

<template>
  <button
    class="bg-green-400 rounded-lg px-2 py-1 text-white mb-2"
    @click="addNewTask"
  >
    New Task
  </button>

</template>

<style scoped>

</style>
