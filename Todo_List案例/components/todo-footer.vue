<template>
<div class="todo-footer" v-show="listlength">
        <label>
          <input type="checkbox" v-model="checkbox"/>
        </label>
        <span>
          <span>已完成{{getdone}}</span> / 全部{{listlength}}
        </span>
        <button class="btn btn-danger" @click="remove">清除已完成任务</button>
      </div>
</template>

<script>
export default {
  name:'TodoFooter',
  props:['listlength','getdone','setdone','cleardone','removedone'],
  computed:{
      checkbox:{
        get(){
          return (this.listlength == this.getdone) ? true : false
        },
        set(value){
          value ? this.setdone() : this.cleardone();
        }
      },
    },
  methods: {
      remove(){
        this.removedone();
      }
    },
  }

</script>

<style scoped>
   .todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>