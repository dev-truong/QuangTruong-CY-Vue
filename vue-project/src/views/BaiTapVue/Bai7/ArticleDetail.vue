<script setup>
import { useRoute } from 'vue-router'
import { articles } from '@/views/BaiTapVue/Bai7/extractData.js'
import { ref, watch } from 'vue'

const currentArticle = ref('')
const router = useRoute()
watch(() => router.params.id, (newVal) => {
  currentArticle.value = articles.find(article => article.id === parseInt(newVal))
}, { deep: true, immediate: true })
</script>

<template>
  <div class="flex flex-col items-center justify-center border shadow-lg rounded-md w-[400px] mx-auto mt-4">
    <div class="text-teal-400 p-4 text-lg text-center">{{ currentArticle.title }}</div>
    <div class="text-teal-700 p-4 text-lg">{{ currentArticle.body }}</div>

  </div>
</template>

<style scoped>

</style>
