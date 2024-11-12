import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

const cartStore = defineStore('cartStore', () => {
  const products = reactive([
    {
      id: 1,
      name: 'iPhone 16',
      price: 22000,
      brand: 'iPhone'
    },
    {
      id: 2,
      name: 'Z Flip6',
      price: 12000,
      brand: 'Samsung'
    },
    {
      id: 3,
      name: 'Z Fold6',
      price: 12000,
      brand: 'Samsung'
    },
    {
      id: 4,
      name: 'Xiaomi 14',
      price: 32000,
      brand: 'Xiaomi'
    }
  ])
  const cartProducts = reactive([])
  const quantityItem = computed(() => cartProducts.length)
  const totalPrice = computed(() => cartProducts.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0))
  const isShowCart = ref(false)

  function addToCart(id) {
    const itemCart = products.find((product) => product.id === id)
    const findAddedItem = cartProducts.find(AddedItem => AddedItem.id === itemCart.id)
    if (findAddedItem) {
      findAddedItem.quantity++
    } else {
      cartProducts.push({
        ...itemCart, quantity: 1
      })
    }
  }

  function toggleCart() {
    isShowCart.value = !isShowCart.value
  }

  return {
    products,
    quantityItem,
    isShowCart,
    addToCart,
    toggleCart,
    cartProducts,
    totalPrice
  }
})

export default cartStore
