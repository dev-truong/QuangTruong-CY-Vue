<script setup>

import Actions from '@/views/Day5/Coponents/Actions.vue'
import CheckBox from '@/views/Day5/Coponents/CheckBox.vue'
import Task from '@/views/Day5/Coponents/Task.vue'
import Status from '@/views/Day5/Coponents/Status.vue'
import Date from '@/views/Day5/Coponents/Date.vue'
import NewTask from '@/views/Day5/Coponents/NewTask.vue'
import Export from '@/views/Day5/Coponents/Export.vue'
import { ref } from 'vue'

const tasks = ref([
  { completed: false, content: 'Todo 1', date: new Date(), isEditing: false },
  { completed: false, content: 'Todo 2', date: new Date(), isEditing: false },
]);

function addNewTask() {
  tasks.value.push({ completed: false, content: '', date: new Date(), isEditing: true });
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full mt-4">
    <div class="flex gap-2">
      <NewTask @addNewTask="addNewTask"/>
      <Export/>
    </div>
    <table class="table-auto min-w-[800px] border bg-blue-300 shadow overflow-hidden rounded-lg">
      <thead>
      <tr>
        <th class="border p-2">
          <input type="checkbox">
        </th>
        <th class="border text-blue-700 p-2">Task</th>
        <th class="border text-blue-700 p-2">Status</th>
        <th class="border text-blue-700">Date</th>
        <th class="border text-blue-700 p-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <CheckBox />
        <Task />
        <Status />
        <Date />
        <Actions />
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
