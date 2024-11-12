<script setup>
import cartStore from '@/views/BaiTapVue/Bai12/storeB12/cartStore.js'
import Cart from '@/views/BaiTapVue/Bai12/Cart.vue'

const store = cartStore()

</script>

<template>
    <div class="p-8 relative">
      <div
        class="w-10 h-10 absolute top-8 right-8 cursor-pointer"
        @click="store.toggleCart"
      >
        <img src="@/views/BaiTapVue/Bai12/images/cart.svg" alt="cart image" class="img-cover">
      </div>
      <Cart v-if="store.isShowCart"/>
      <div class="flex items-center justify-center w-5 h-5 absolute top-8 right-8 text-white rounded-full bg-red-500">{{store.quantityItem}}</div>
      <h1 class="text-3xl font-bold mb-6">Danh sách sản phẩm</h1>
      <div class="flex gap-6">
        <div
          v-for="(product, indexProduct) in store.products"
          :key="product.id"
          class="border border-gray-200 rounded-lg overflow-hidden shadow-lg flex"
        >
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
            <p class="text-gray-600 mb-1">Brand: {{ product.brand }}</p>
            <p class="text-gray-800 font-bold mb-4">Giá: {{ product.price }}</p>
            <button
              class="border rounded-lg bg-blue-600 text-white p-2 mb-2"
              @click="store.addToCart(product.id)"
            >
              Thêm Vào Giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
