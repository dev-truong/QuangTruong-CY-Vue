<script setup>
const model = defineModel()
const props = defineProps({
  value: [String, Number]
})
</script>

<template>
  <label class="flex items-center justify-center cursor-pointer">
    <input type="checkbox" class="hidden peer" v-model="model" :value="value" />
    <span
      class="w-6 h-6 border-2 border-blue-400 bg-white rounded-full peer-checked:bg-yellow-500 peer-checked:border-blue-500 flex items-center justify-center">
    </span>
  </label>

</template>

<style scoped>

</style>
