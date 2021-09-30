<template>
  <div class="uu">
       <slot name="age"></slot>
      <h2>{{name}}</h2>
  
      <h2>{{age}}</h2>
      <slot name="test"></slot>
         
  </div>
</template>

<script>
export default {
    data() {
        return {
            age:12,
            name:'zhangsan'
        }
    },
  
}
</script>

<style scoped>
    .uu{
       
        height: 100px;
        width: 200px;
        border: 1px solid red;
    }
    h2{
        text-align: center;
        /* line-height: 50px; */
    }
</style>