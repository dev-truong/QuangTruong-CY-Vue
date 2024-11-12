<script setup>
import useCounterStore2 from '@/stores/useCounterStore2.js'
const store = useCounterStore2()
</script>

<template>
<h1>A</h1>
<div>{{store.count}}</div>
</template>

<style scoped>

</style>
