<script setup>
import { reactive, ref, watch } from 'vue'

const showTodo = ref(false)
const newTask = ref('')
const tasks = reactive(JSON.parse(localStorage.getItem('tasks')) || [])
let currentInput = 'add'
let editIndex = null

function addTask() {
  switch (currentInput) {
    case 'add':
      tasks.push({ id: (Math.random() * 1000).toFixed() + 'abcd', content: newTask.value, status: false })
      break
    case 'edit':
      tasks[editIndex].content = newTask.value
      currentInput = 'add'
      editIndex = null
  }
  newTask.value = ''
}

function deleteTask(index) {
  tasks.splice(index, 1)
}

function editTask(index) {
  currentInput = 'edit'
  showTodo.value = true
  newTask.value = tasks[index].content
  editIndex = index
}

watch(tasks, () => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
})

const currentDate = new Date()
const today = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`

</script>

<template>
  <div class="w-full h-full min-h-screen flex justify-center bg-gray-100 p-10">

    <div class="flex flex-col items-center border border-gray-300 bg-white rounded-lg w-2/5 p-6 gap-5 shadow-lg">

      <div class="text-2xl font-bold text-gray-700">Today's Task</div>

      <div class="flex justify-between items-center w-full">
        <div>
          <p class="uppercase text-lg font-bold text-gray-600">Today's Task</p>
          <div class="text-gray-500 text-sm">{{ today }}</div>
        </div>
        <button @click="showTodo = !showTodo"
                class="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
          + New Task
        </button>
      </div>

      <div class="grid grid-cols-3 w-full gap-2">

        <button class="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition">ALL</button>
        <button class="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition">Completed</button>
        <button class="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition">Deleted</button>
      </div>

      <div v-show="showTodo" class="flex justify-between w-full gap-4 items-center mt-4">

        <input v-model="newTask" type="text" placeholder="Enter new task"
               class="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition" />
        <button @click="addTask" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          {{ currentInput === 'add' ? 'Add' : 'Save' }}
        </button>
      </div>

      <ul class="space-y-4 w-full mt-4">

        <li class="flex items-center gap-4 p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200"
            v-for="(task, index) in tasks" :key="task.id">
          <input type="checkbox" v-model="task.status" class="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded" />
          <span :class="{ 'line-through text-gray-400': task.status }" class="flex-1 text-gray-700">
            {{ task.content }}
          </span>
          <button @click="editTask(index)" class="text-blue-500 hover:text-blue-700 transition ml-auto">Edit</button>
          <button @click="deleteTask(index)" class="text-red-500 hover:text-red-700 transition ml-2">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>

</style>
