<script setup>
import { reactive, ref } from 'vue'

const users = reactive([
  { id: 1, name: 'Nguyen Van A', email: 'john@example.com' },
  { id: 2, name: 'Nguyen Van B', email: 'jane@example.com' },
  { id: 3, name: 'Nguyen Van C', email: 'jane@example.com' },
  { id: 4, name: 'Nguyen Van D', email: 'jane@example.com' },
  { id: 5, name: 'Nguyen Van E', email: 'jane@example.com' },
  { id: 6, name: 'Nguyen Van AA', email: 'jane@example.com' },
  { id: 6, name: 'Nguyen Van AAA', email: 'jane@example.com' },
  { id: 6, name: 'Nguyen Van AAAA', email: 'jane@example.com' }
])


</script>

<template>
  <div class="flex flex-col justify-center items-center gap-2 w-full p-6">
    <input type="text" placeholder="Search" class="p-2 border rounded-lg" />
    <table class="w-full text-center">
      <thead>
      <tr>
        <th class="border p-2">ID</th>
        <th class="border p-2">Name</th>
        <th class="border p-2">Email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td class="p-2 border">{{ user.id }}</td>
        <td class="p-2 border">{{ user.name }}</td>
        <td class="p-2 border">{{ user.email }}</td>
      </tr>
      </tbody>
    </table>
    <div class="flex justify-between items-center gap-2 p-6">
      <button class="px-3 py-1 border rounded-md bg-blue-400 text-white">Prev</button>
      <button class="px-3 py-1 border rounded-md bg-blue-400 text-white">Next</button>
    </div>
  </div>
</template>

<style scoped>

</style>
