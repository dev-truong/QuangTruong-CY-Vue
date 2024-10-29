<script setup>
import { computed, reactive } from 'vue'

const product = reactive({
    image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
    imageAlt: 'ps5 alt',
    product: 'ps5',
    productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
    quantity: 10,
    price: 10000,
    discount: 0.2,
    inStock: true,
    classObject: {
      'bg-green': true,
      'bg-blue': false
    }
  }
)

function calcPrice() {
  return (product.price * product.quantity - product.price * product.quantity * product.discount)
}

const descriptionProduct = computed(() => {
  return (product.description = 'This is decription')
})

const formatPrice = computed(() => {
  return (new Intl.NumberFormat('vi-VN').format(product.price) + 'VND')
})
</script>

<template>
  <table>
    <thead>
    <tr>
      <th>Product Name</th>
      <th>Image</th>
      <th>Decription</th>
      <th>Price</th>
      <th>Discount</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="product-name" :class="product.inStock ? 'text-blue' : 'text-green'">{{ product.product }}</td>
      <td class="product-img"><img :src=product.image :alt=product.imageAlt></td>
      <td>{{ descriptionProduct }}</td>
      <td class="product-price" :class="product.classObject">{{ formatPrice }}</td>
      <td>{{ calcPrice() }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.text-blue {
  color: blue;
}

.text-green {
  color: green;
}

.bg-green {
  background-color: green;
}

.bg-blue {
  background-color: blue;
}

table {
  width: 80%;
  max-width: 800px;
  margin: 20px 0;
  font-size: 18px;
  text-align: center;
  background-color: darkgray;
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

tbody tr:hover {
  background-color: #f1f1f1;
}

.product-name {
  text-transform: uppercase;
  font-weight: bold;
}

.product-img {
  width: 200px;
  height: 200px;

}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-price {
  font-weight: bold;
}
</style>
