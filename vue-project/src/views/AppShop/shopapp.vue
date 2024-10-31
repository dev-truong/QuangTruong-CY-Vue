<script setup>
import { reactive, ref } from 'vue'

const products = reactive([
  {
    id: 1,
    name: 'iPhone 16',
    price: 22000,
    releaseDate: '2023-02-10',
    isBestSeller: true,
    brand: 'iPhone',
    description: 'Chip A18 với CPU có tốc độ cao hơn 30% so với thế hệ tiền nhiệm.',
    image: [
      new URL('@/assets/images/ip-16-black.png', import.meta.url),
      new URL('@/assets/images/ip-16-blue.png', import.meta.url),
      new URL('@/assets/images/ip-16-pink.png', import.meta.url)
    ],
    colors: [
      {name: 'Black', stock: 5},
      {name: 'Blue', stock: 0},
      {name: 'Pink', stock: 3}
    ]
  },
  {
    id: 2,
    name: 'Z Flip6',
    price: 12000,
    releaseDate: '2023-01-15',
    isBestSeller: false,
    brand: 'Samsung',
    description: 'Compact phone with high-resolution camera.',
    image: [
      new URL('@/assets/images/z-flip6-gray.png', import.meta.url),
      new URL('@/assets/images/z-flip6-green.png', import.meta.url),
      new URL('@/assets/images/z-flip6-yellow.png', import.meta.url)
    ],
    colors: [
      {name: 'Gray', stock: 5},
      {name: 'Green', stock: 4},
      {name: 'Yellow', stock: 3}
    ]
  },
  {
    id: 3,
    name: 'Z Fold6',
    price: 18000,
    releaseDate: '2022-12-20',
    isBestSeller: true,
    brand: 'Samsung',
    description: 'Phone with powerful processor and long battery life.',
    image: [
      new URL('@/assets/images/z-fold6-blue.png', import.meta.url),
      new URL('@/assets/images/z-fold6-gray.png', import.meta.url)
    ],
    colors: [
      {name: 'Blue', stock: 5},
      {name: 'Gray', stock: 4},
    ]
  },
  {
    id: 4,
    name: 'Xiaomi 14',
    price: 14000,
    releaseDate: '2023-03-05',
    isBestSeller: false,
    brand: 'Xiaomi',
    description: 'Affordable smartphone with essential features.',
    image: [
      new URL('@/assets/images/xiaomi-14-black.png', import.meta.url),
      new URL('@/assets/images/xiaomi-14-green.png', import.meta.url)
    ],
    colors: [
      {name: 'Black', stock: 5},
      {name: 'Green', stock: 4},
    ]
  },
  {
    id: 5,
    name: 'OPPO Find N3',
    price: 20000,
    releaseDate: '2023-05-25',
    isBestSeller: true,
    brand: 'Oppo',
    description: 'Luxury phone with premium materials and 4K display.',
    image: [
      new URL('@/assets/images/oppo-black.png', import.meta.url),
      new URL('@/assets/images/oppo-yellow.png', import.meta.url)
    ],
    colors: [
      {name: 'Black', stock: 5},
      {name: 'Yellow', stock: 4},
    ]
  }
])

const currentProduct = ref(products.map(product => product.image[0]))
const selectedColor = ref({});
const stateCart = reactive({
  item : [],
  totolQuantity: 0
})

function changeColor(indexProduct, indexColor) {
  currentProduct.value[indexProduct] = products[indexProduct].image[indexColor];
  // selectedColor.value[indexProduct] = products[indexProduct].colors[indexColor];
}

function resetColor(indexProduct) {
  currentProduct.value[indexProduct] = products[indexProduct].image[0];
  // selectedColor.value[productIndex] = null;
}

function formatDate(date) {
  const [year, month, day] = date.split('-')
  return `ngày ${day} tháng ${month} năm ${year}`
}

function formatPrice(price) {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY'
  }).format(price)
}

function addToCart() {
  stateCart.totolQuantity++;
}

</script>

<template>
  <div class="p-8 relative">
    <div class="w-10 h-10 absolute top-8 right-8">
      <img src="@/assets/images/cart.svg" alt="cart image" class="img-cover">
    </div>
    <div class="flex items-center justify-center w-5 h-5 absolute top-8 right-8 text-white rounded-full bg-red-500">{{stateCart.totolQuantity}}</div>
    <h1 class="text-3xl font-bold mb-6">Danh sách sản phẩm</h1>
    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="(product, indexProduct) in products"
        :key="product.id"
        class="border border-gray-200 rounded-lg overflow-hidden shadow-lg flex"
      >
        <div class="mb-2 w-[150px] h-[150px] relative">
          <img :src="currentProduct[indexProduct]" alt="product.name" class="size-full object-contain" />
          <div class="flex justify-center gap-2 p-4">
            <div
              v-for="(color, indexColor) in product.colors"
              :key="color.name"
              class="w-6 h-6 rounded-full"
              :style="{ backgroundColor: color.name }"
              @mouseover="changeColor(indexProduct, indexColor)"
              @mouseleave="resetColor(indexProduct)"
              @click="selectedColor.value[indexProduct] = color"
            ></div>
          </div>
          <p class="text-sm text-gray-500 mb-2 absolute top-0 left-3 px-1 bg-yellow-500 rounded-md">
            <span v-if="product.isBestSeller">Bán chạy</span><span v-else>Bán không chạy</span>
          </p>
        </div>
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
          <p class="text-gray-600 mb-1">Brand: {{ product.brand }}</p>
          <p class="text-gray-800 font-bold mb-4">{{ formatPrice(product.price) }}</p>
          <div class="text-sm text-gray-500 mb-6">Ngày phát hành: <p> {{ formatDate(product.releaseDate) }}</p></div>
          <button
            class="border rounded-lg bg-blue-600 text-white p-2 mb-2"
            @click="addToCart()"
          >
<!--            :disabled="selectedColor.value[indexProduct]?.stock === 0"-->
            Thêm Vào Giỏ
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
