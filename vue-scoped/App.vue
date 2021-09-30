<template>
  <div>
    <h2 ref="age">{{name}}</h2>
    <HelloWorld ref="word"/>
    <div class="yellow">1232312</div>
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
<style scoped>
.yellow{
  color: yellow;
  background-color: red;
}
h2{
  color: aqua;
}
</style>