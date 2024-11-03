<script setup>
import { computed, reactive, ref } from 'vue'

const products = reactive([
  {
    name: 'product1',
    price: 1000
  },
  {
    name: 'product2',
    price: 2000
  },
  {
    name: 'product3',
    price: 3000
  },
  {
    name: 'product4',
    price: 4000
  },
  {
    name: 'product5',
    price: 5000
  }
])

const minPrice = ref(0);
const filterProduct = computed(() => {
  return products.filter((item) => item.price >= minPrice.value);
})

</script>

<template>
  <div>
    <table class="mx-auto mt-14 border shadow-md rounded-lg overflow-hidden border-gray-300">
      <thead class="bg-blue-500">
      <tr>
        <th class="py-2 px-4 text-left">Tên Sản Phẩm</th>
        <th class="py-2 px-4 text-left">
          Giá
          <input v-model="minPrice" type="number" class="w-[90px] rounded-md text-center ml-4">
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in filterProduct">
        <th class="border py-2 px-4">{{ product.name }}</th>
        <th class="border py-2 px-4">{{ product.price }}</th>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<style scoped>

</style>
