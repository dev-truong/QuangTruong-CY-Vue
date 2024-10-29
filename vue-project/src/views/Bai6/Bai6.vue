<script setup>
import { computed, reactive } from 'vue'

const product = reactive(
  [{
    name: 'ps3',
    quantity: 3,
    price: 30000
  },
  {
    name: 'ps4',
    quantity: 4,
    price: 40000
  },
  {
    name: 'ps5',
    quantity: 5,
    price: 50000
  }]
)

const sumValue = computed(() => {
  return product.reduce((sum, item) => {
    return  sum + item.price * item.quantity
  }, 0)
})

const formatPrice = (item) => {
  return (new Intl.NumberFormat('vi-VN').format(item) + 'VND')
}
</script>

<template>
  <table>
    <thead>
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in product" :key="product.name">
      <td class="product-name">{{ item.name }}</td>
      <td>
        <input class="quantity" type="number" v-model.number="item.quantity" min="0">
      </td>
      <td class="product-price">{{ formatPrice(item.price) }}</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: right;">Total:</td>
      <td>{{ formatPrice(sumValue) }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

table {
  width: 80%;
  max-width: 800px;
  margin: 20px 0;
  font-size: 18px;
  text-align: center;
  background-color: lightskyblue;
  border-radius: 8px;
  overflow: hidden;
  border-collapse: collapse;
}

thead {
  background-color: #007bff;
  color: #ffffff;
}

th, td {
  padding: 15px 20px;
  border: 1px solid white;
}

th {
  font-weight: bold;
  text-transform: uppercase;
}

tbody tr {
  border-bottom: 1px solid #ddd;
}

.product-name {
  text-transform: uppercase;
  font-weight: bold;
}

.product-price {
  font-weight: bold;
}

.quantity {
  width: 80px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
}
</style>
