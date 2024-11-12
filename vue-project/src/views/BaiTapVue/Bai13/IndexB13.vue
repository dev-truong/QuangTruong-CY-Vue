<script setup>

import DynamicCard from '@/views/BaiTapVue/Bai13/components/DynamicCard.vue'
</script>

<template>
  <div class="flex flex-col items-center min-h-screen mt-4 gap-2">

    <DynamicCard component-type="text" text-content="This is text sample">
      <template #header>
        <h2 class="text-blue-700">
        Header use named slot
        </h2>
      </template>
      <template #footer>
        <h2 class="text-blue-700">
        Footer use named slot
        </h2>
      </template>
    </DynamicCard>
    <DynamicCard component-type="image" image-content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZb_ON_LY_p2TLZvzjJqJ3LmAsfXRHgBwg6g&s"/>
    <DynamicCard component-type="video" video-content="https://www.w3schools.com/html/mov_bbb.mp4"/>
  </div>
</template>

<style scoped>

</style>
