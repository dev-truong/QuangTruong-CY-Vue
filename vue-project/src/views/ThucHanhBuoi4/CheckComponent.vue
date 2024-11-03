<script setup>
const props = defineProps({
  product: {
    type: Array,
    default: 'nothing from Listcomponent'
  }
})
console.log(props.product)
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="font-bold">Sản Phẩm Đã Check</div>
  </div>
  <div v-for="product in product">
    <div v-if="product.isChecked" class="grid grid-cols-3">
      <div>{{ product.name }}</div>
      <div>{{ product.price }}</div>
    </div>
  </div>
  <div class="grid grid-cols-3">
    <div class="font-bold">Sản Phẩm Chưa Check</div>
  </div>
  <div v-for="product in product">
    <div v-if="!product.isChecked" class="grid grid-cols-3">
      <div>{{ product.name }}</div>
      <div>{{ product.price }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
