<script setup>
console.log('this is notification from ItemComponent')

const props = defineProps({
  product: {
    type: Array,
    default: 'nothing from Listcomponent'
  }
})

const emit = defineEmits()

function sendProductCode(product) {
  emit('sendProductCode', product)
}
</script>

<template>
  <div class="grid grid-cols-3 items-center">
    <div class="font-bold">Sản Phẩm</div>
    <div class="font-bold">Giá</div>
  </div>
  <div v-for="product in product" class="grid grid-cols-3">
    <div>{{ product.name }}</div>
    <div>{{ product.price }}</div>
    <button
      class="p-2 border rounded-2xl text-white w-3/5"
      @click="sendProductCode(product)"
      :disabled="product.isChecked"
      :class="product.isChecked ? 'bg-gray-500' : 'bg-blue-400'"
    >
      Send Code & Confirm
    </button>

  </div>
</template>

<style scoped>

</style>
