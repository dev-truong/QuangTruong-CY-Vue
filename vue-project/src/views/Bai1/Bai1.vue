<script setup>
import { computed, reactive, ref, watch } from 'vue'

const product = reactive({
  cart: [],
  products: [
    {
      id: 1,
      name: 'PS5',
      price: 5555,
      publicDate: '05-05-2021',
      image:
        'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
      hot: true
    },
    {
      id: 2,
      name: 'PS4',
      price: 4444,
      publicDate: '04-04-2021',
      image:
        'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$',
      hot: true
    },
    {
      id: 3,
      name: 'PS3',
      price: 3333,
      publicDate: '03-03-2021',
      image:
        'https://i.ebayimg.com/images/g/AHMAAOSw51VkUwAG/s-l400.png',
      hot: false
    }
  ],
  paymentMethods: [
    { text: 'COD', value: 1 },
    { text: 'Banking', value: 2 },
    { text: 'Ứng dụng bên thứ 3', value: 3 }
  ],
  selectedPayment: 2
})

const showCart = ref(false)
const selectedPayment = ref(2)
const selectedProduct = ref(true)

function addToCart(item) {
  product.cart.push(item)
}

watch(selectedPayment, () => {
  alert('Phương thức thanh toán đã thay đổi')
})

const filterProducts = computed(() => {
  return selectedProduct.value ? product.products : product.products.filter((item) => item.hot)
})

</script>

<template>
  <div class="flex justify-center relative">
    <table
      class="w-4/5 max-w-xl my-5 text-lg text-center text-white rounded-lg overflow-hidden border-collapse bg-blue-200">
      <thead class="bg-blue-500 text-white uppercase font-bold">
      <tr>
        <th class="px-5 py-4 border border-white">
          Name
          <select v-model="selectedProduct" class="border rounded-md p-1 mt-2 text-sm w-32 text-red-500 font-normal">
            <option :value="true">All Product</option>
            <option :value="false">Hot Product</option>
          </select>
        </th>
        <th class="px-5 py-4 border border-white">Image</th>
        <th class="px-5 py-4 border border-white">Price</th>
        <th class="px-5 py-4 border border-white">Compared</th>
        <th class="px-5 py-4 border border-white">Add To Card</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in filterProducts" :key="item.id" class="border-gray-300">
        <td class="px-5 py-4 border border-white text-gray-900 uppercase font-bold">{{ item.name }}</td>
        <td class="px-5 py-4 border border-white">
          <div class="w-48 h-48">
            <img class="w-full h-full object-cover rounded-md shadow" :src="item.image" alt="image">
          </div>
        </td>
        <td class="px-5 py-4 border border-white text-blue-700 font-bold">{{ item.price }}</td>
        <td class="p-3 border border-white">
          <span v-if="item.price > 4000" class="text-red-500 font-bold">Đắt</span>
          <span v-else class="text-green-500 font-bold">Rẻ</span>
        </td>
        <td class="p-3 border border-white">
          <button @click="addToCart(item)"
                  class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 whitespace-nowrap">
            Thêm Vào Giỏ
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="showCart = !showCart" class="absolute top-4 right-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="h-12 w-12 text-gray-600">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </button>
    <div v-show="showCart" class="fixed top-16 right-4 flex flex-col items-center justify-center gap-2.5">
      <ul class="w-full border-2">
        <li v-for="(cartItem) in product.cart" :key="id" class="flex justify-between p-2  border-blue-400 rounded-lg">
          <span>{{ cartItem.name }} ({{ cartItem.price }} VND)</span>
        </li>
      </ul>
      <p>Phương Thức Thanh Toán</p>
      <select v-model="selectedPayment" class="border rounded-md p-2 w-full">
        <option v-for="method in product.paymentMethods" :value="method.value">
          {{ method.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>

