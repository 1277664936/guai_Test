<template>
  <div>
    <h2 ref="age">{{name}}</h2>
    <HelloWorld ref="word"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      age:43,
      name:'zhangsan'
    }
  },
  components:{
    HelloWorld
  },
  mounted(){
    console.log(this.$refs.age);
    console.log(this.$refs.word);
  }
}
</script>

<style>

</style>