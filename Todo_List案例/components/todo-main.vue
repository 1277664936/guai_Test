<template>
    <ul class="todo-main">
      <TodoList
        v-for="t in todos" 
        :key="t.id" 
        :todos='t'  
        :deleteTodo='deleteTodo'/>
    </ul>
</template>

<script>
import TodoList from './todo-item.vue'
export default {
  name:'TodoMain',
  components:{TodoList},
  props:['todos','deleteTodo']
}
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>