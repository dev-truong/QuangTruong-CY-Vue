<script setup>
import cartStore from '@/views/BaiTapVue/Bai12/storeB12/cartStore.js'

const store = cartStore()

</script>

<template>
<div class="fixed top-[104px] right-16 border border-orange-400 p-2 rounded-md shadow-lg bg-orange-200">
  <ul>
    <li v-for="item in store.cartProducts" class="grid grid-cols-3 text-red-500 text-lg">
      <div class="border text-center p-2">{{item.name}}</div>
      <div class="border text-center p-2">{{item.quantity}}</div>
      <div class="border text-center p-2">{{item.price}}</div>
    </li>
  </ul>
  <div class="text-red-500 text-2xl text-center grid grid-cols-3 items-center">
    <div class="col-span-2 border p-2">Total</div>
    <div class="border h-full grid place-items-center">{{store.totalPrice}}</div>
  </div>
</div>
</template>

<style scoped>

</style>
