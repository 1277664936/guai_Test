<template>
  <div>
    <h2 ref="age">{{name}}</h2>
    <HelloWorld ref="word"/>
  </div>
</template>

<script>

// console.log(mixing);
import HelloWorld from './components/HelloWorld.vue'
export default {
    data() {
        return {
            age: 43,
            name: 'zhangsan'
        }
    },
  components:{
    HelloWorld
  },
}
</script>

<style>

</style>