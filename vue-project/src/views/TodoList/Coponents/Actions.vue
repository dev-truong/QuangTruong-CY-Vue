<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isEditing: Boolean,
});

const emit = defineEmits();
function handleClick() {
  emit("handleSave");
}
</script>

<template>
    <button
      class="py-1 px-3 bg-orange-400 text-white hover:bg-orange-600 rounded-lg mr-2"
      @click="handleClick"
    >
      {{ isEditing ? 'Save' : 'Edit' }}
    </button>
    <button
      class="py-1 px-3 bg-orange-400 text-white hover:bg-orange-600 rounded-lg"
    >
      Delete
    </button>

</template>

<style scoped>

</style>
