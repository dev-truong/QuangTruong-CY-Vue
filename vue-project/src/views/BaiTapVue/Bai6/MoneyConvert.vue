<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const amountFrom = ref(0)
const amountTo = ref(0)
const currencyFrom = ref('USD')
const currencyTo = ref('VND')
const rates = ref({})


const getRates = async () => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD')
    rates.value = response.data.rates
    console.log(rates.value)
  } catch (error) {
    console.log("Error:", error)
  }
}

const convertCurrency = () => {
  if (rates.value[currencyFrom.value] && rates.value[currencyTo.value]) {
    const rate = rates.value[currencyTo.value] / rates.value[currencyFrom.value]
    amountTo.value = (amountFrom.value * rate).toFixed(2)
  }
}

const swapCurrencies = () => {
  [currencyFrom.value, currencyTo.value] = [currencyTo.value, currencyFrom.value]
  convertCurrency()
}

onMounted(() => {
  getRates()
})
</script>

<template>
  <div class="w-[600px] flex flex-col justify-center items-center mx-auto border rounded-md shadow mt-4 bg-blue-400 p-6">
    <h3 class="mb-6 text-2xl text-blue-700 font-bold">Money Convert</h3>
    <form @submit.prevent="convertCurrency" class="flex flex-col justify-center items-center">
      <button class="border bg-blue-700 px-4 py-2 rounded-lg text-gray-50 text-2xl mb-3">Convert</button>
      <div class="flex mb-2">
        <input v-model.number="amountFrom" type="number" class="border rounded-md p-1" placeholder="Amount">
        <div class="h-12 mx-2 cursor-pointer flex items-center justify-center" @click="swapCurrencies">
          <img src="@/views/BaiTapVue/Bai6/arrow.svg"/>
        </div>
        <input v-model="amountTo" type="number" class="border rounded-md p-1" readonly placeholder="Result">
      </div>
      <div class="space-x-2 mb-4">
        <select v-model="currencyFrom" class="text-gray-800 text-xl w-16">
          <option v-for="(rate, code) in rates" :key="code" :value="code">{{ code }}</option>
        </select>
        <label class="text-gray-800 text-xl">To</label>
        <select v-model="currencyTo" class="text-gray-800 text-xl w-16">
          <option v-for="(rate, code) in rates" :key="code" :value="code">{{ code }}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
