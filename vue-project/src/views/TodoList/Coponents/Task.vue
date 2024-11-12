<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  content: String,
  isEditing: Boolean
})
console.log(props.content, props.isEditing)
</script>

<template>
  <input
    type="text" class="w-full rounded-md p-1 "
    v-model="props.content"
    :disabled="!isEditing"
    :class="{'bg-white': !isEditing, 'border-2 border-orange-400': isEditing}"
  >
</template>

<style scoped>

</style>
