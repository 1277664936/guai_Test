<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :appendone='appendone'/>
      <todo-main :todos='todos'  :deleteTodo='deleteTodo'/>
      <todo-footer  
        :listlength='listlength' 
        :getdone='getdone' 
        :setdone='setdone' 
        :cleardone='cleardone'
        :removedone='removedone'
        />
    </div>
  </div>
</div>
</template>

<script>
import TodoFooter from './components/todo-footer.vue'
import todoHeader from './components/todo-header.vue'
import TodoMain from './components/todo-main.vue'
export default {
  name:'App',
  components: { todoHeader, TodoFooter,TodoMain},
  data() {
    return {   	
      todos:[
					{id:'001',title:'抽烟',done:true},
					{id:'002',title:'喝酒',done:false},
					{id:'003',title:'开车',done:true}
				]
    }
  },
  methods: {
   setdone(){
     this.todos.forEach((t) => {
       t.done = true
     })
   },
   cleardone(){
     this.todos.forEach((t)=>{
        t.done = false
     })
   },
   removedone(){
    this.todos =  this.todos.filter((t)=>{
       return !t.done
     })
   },
   appendone(value){
     if(value==''){
       alert('输入的为空:')
     }else{
        this.todos.unshift({
            title:value,
            done:false,
            id:'00' + (this.listlength + 1)
          })
        }
     },
  deleteTodo(id){
		this.todos = this.todos.filter( todo => todo.id !== id )
	},
  },
  computed:{
     listlength(){
      return this.todos.length
    },
    getdone(){
     const num = this.todos.reduce((index,todos)=>{
        return index + (todos.done ? 1 : 0)
      },0)
      return num
    }
  }
  }


</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>