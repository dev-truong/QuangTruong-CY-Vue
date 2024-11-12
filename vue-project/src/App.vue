<script setup>
import ListComponent from '@/views/ThucHanhBuoi4/ListComponent.vue'
import TestAxios from '@/views/TestAxios.vue'
import { routes } from '@/router/index.js'
import PiniaA from '@/views/TestPinia/PiniaA.vue'
import PiniaB from '@/views/TestPinia/PiniaB.vue'
</script>
<template>

  <!--  <ListComponent/>-->
  <!--  <TestAxios/>-->
<!--  <PiniaA/>-->
<!--  <PiniaB/>-->

  <div class="fixed top-0 right-0 left-0 flex items-center justify-center gap-8 py-2 bg-blue-400">
    <RouterLink
      v-for="item in routes"
      :to="item.path"
      :key="item.name"
    >
      {{ item.title }}
    </RouterLink>

  </div>
  <div class="pt-10">
    <RouterView />
  </div>
</template>
<style scoped>

</style>
