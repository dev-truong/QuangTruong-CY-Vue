<script setup>

import Actions from '@/views/TodoList/Coponents/Actions.vue'
import CheckBox from '@/views/TodoList/Coponents/CheckBox.vue'
import Task from '@/views/TodoList/Coponents/Task.vue'
import Status from '@/views/TodoList/Coponents/Status.vue'
import NewDate from '@/views/TodoList/Coponents/NewDate.vue'
import NewTask from '@/views/TodoList/Coponents/NewTask.vue'
import Export from '@/views/TodoList/Coponents/Export.vue'
import { ref, watch } from 'vue'

const tasks = ref([
  { completed: false, content: 'Todo 1', createdDate: '7/11/2024', isEditing: false, id: 1 },
  { completed: false, content: 'Todo 2', createdDate: '7/11/2024', isEditing: false, id: 2 },
])
const checkValue = ref([])
const checkAll = ref(false)

function addNewTask (content) {
  tasks.value.push({
    completed: false,
    content: '',
    createdDate: '7/11/2024',
    isEditing: true,
    id: Date.now()
  })
}
//check box
watch(() => checkAll.value, (newValue) => {
  if (newValue) {
    checkValue.value = tasks.value.map((item) => item.id)
    return
  }
  if (tasks.value.length === checkValue.value.length) {
    checkValue.value = []
  }
})
watch(() => checkValue.value, () => {
  checkAll.value = tasks.value.length === checkValue.value.length
})

function handleSave(task, index) {
  task.isEditing = !task.isEditing
  tasks.value[index].content = task.content
  console.log("task: ", tasks.value[index].content)
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full mt-4">
    <div class="flex gap-2">
      <NewTask @addNewTask="addNewTask" />
      <Export />
    </div>
    <table class="table-auto min-w-[800px] border bg-blue-300 shadow overflow-hidden rounded-lg">
      <thead>
      <tr>
        <th class="border p-2">
          <CheckBox v-model="checkAll" />
        </th>
        <th class="border text-blue-700 p-2">Task</th>
        <th class="border text-blue-700 p-2">Status</th>
        <th class="border text-blue-700">Date</th>
        <th class="border text-blue-700 p-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tasks" :key="item.id">
        <td class="border text-center p-2">
          <CheckBox
            :value="item.id"
            v-model="checkValue"
          />
        </td>
        <td class="border text-center p-2">
          <Task
            :content="item.content"
            :isEditing="item.isEditing"
          />
        </td>
        <td class="border text-center p-2">
          <Status />
        </td>
        <td class="border text-center p-2">
          <NewDate />
        </td>
        <td class="border text-center p-2">
          <Actions
            :isEditing="item.isEditing"
            @handleSave="handleSave(item, index)"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
