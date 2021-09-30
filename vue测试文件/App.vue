<template>
  <div>
    <h2>{{name}}</h2>
    <HelloWorld/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
export default {
//   const num = 10;
// console.log(num);
  data() {
    return {
      name:'zhangsan'
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<style>

</style>