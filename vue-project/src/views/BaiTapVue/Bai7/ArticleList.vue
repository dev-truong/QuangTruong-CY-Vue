<script setup>
import { articles } from '@/views/BaiTapVue/Bai7/extractData.js'
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-4 min-h-screen p-6">
    <h2 class="text-yellow-500 text-4xl mb-5">Danh sách bài viết</h2>
    <ul class="grid grid-cols-3 gap-2">
      <li v-for="article in articles" class="text-teal-400 p-4 text-lg border shadow-lg rounded-md text-center">
        <RouterLink
          :to="{
            name: 'Bai7Detail',
            params: {
              id: article.id
            }
          }"
        >
         {{ article.title }}
        </RouterLink>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>
