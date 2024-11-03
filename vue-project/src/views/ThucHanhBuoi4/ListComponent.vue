<script setup>

import ItemComponent from '@/views/ThucHanhBuoi4/ItemComponent.vue'
import { reactive } from 'vue'
import CheckComponent from '@/views/ThucHanhBuoi4/CheckComponent.vue'

const products = reactive([
  {
    name: 'product1',
    price: 100,
    isChecked: true,
    code: 'code1'
  },
  {
    name: 'product2',
    price: 200,
    isChecked: false,
    code: 'code2'
  },
  {
    name: 'product3',
    price: 300,
    isChecked: false,
    code: 'code3'
  }
])

function sendProductCode(item) {
  alert(item.code)
  item.isChecked = true
}
</script>

<template>
  <ItemComponent :product='products' @sendProductCode="sendProductCode" />
  <CheckComponent :product='products' />

</template>

<style scoped>

</style>
