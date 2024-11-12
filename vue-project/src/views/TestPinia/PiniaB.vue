<script setup>
import  useCounterStore2  from '@/stores/useCounterStore2.js'

const store = useCounterStore2()
function handleCount() {
  store.increment()
}
</script>

<template>
<button @click="handleCount">Click to count</button>
</template>

<style scoped>

</style>
