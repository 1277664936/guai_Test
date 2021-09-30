<template>
  <div>
       <li>
          <label>
            <input type="checkbox" v-model='todos.done'/>
            <span>{{todos.title}}</span>
          </label>
          <button class="btn btn-danger" @click="handleDelete(todos.id)">删除</button>
        </li>
  </div>
</template>

<script>
export default {
  name:'todoLists',
  methods: {
      handleDelete(id){
				if(confirm('确定删除吗？')){
					this.deleteTodo(id)
				}
			}
  },
  props:['todos','deleteTodo']
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
   display: none;
  float: right;
 
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
	li:hover{
		background-color: #ddd;
	}
  li:hover button {
  /* color: yellow; */
  display: block;
}
</style>