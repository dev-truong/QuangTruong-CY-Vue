<script setup>
import { onMounted, ref, reactive, watch, computed } from 'vue'
import Bai1 from '@/views/Bai1/Bai1.vue'
import Bai2 from '@/views/Bai2/Bai2.vue'
import Bai3 from '@/views/Bai3/Bai3.vue'
import Bai4 from '@/views/Bai4/Bai4.vue'
import Bai5 from '@/views/Bai5/Bai5.vue'
import Bai6 from '@/views/Bai6/Bai6.vue'
import {routes} from '@/router/index.js'

//   const msg = ref("hello")
//   const obj = reactive ( {
//      name : "test",
//       age : 9
// })
//
//   onMounted( () => {
//     setTimeout(() => {
//       msg.value = "hello 2"
//     }, 3000);
// })
//   function changeObj() {
//     obj.name = "Truong"
//     obj.age = 10
//   }
//
//   // const yearOld = computed(() => )
//
//   watch(() => obj.name, (newValue, oldValue) => {
//     msg.value = `Watch Success Old Value + ${oldValue} + New Value + ${newValue}`
//   })
</script>
<template>
<!--  <div>-->
<!--    {{msg}}-->
<!--  </div>-->

<!--  <div>Object: {{obj.name}} - {{obj.age}}</div>-->
<!--  <button @click="changeObj">changeObj</button>-->


<!--  <Bai1/>-->
<!--  <Bai2/>-->
<!--<Bai3/>-->
<!--  <Bai4/>-->
<!--<Bai5/>-->
<!--  <Bai6/>-->
  <div class="navbar">
  <RouterLink v-for="item in routes" :to="item.path" :key="item.name">{{item.title}}</RouterLink>

  </div>
  <RouterView/>
</template>
<style scoped>
  .navbar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: white;
    padding: 10px 0;
  }
</style>
