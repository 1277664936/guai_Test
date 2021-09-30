<template>
  <div>
    <h2 >{{name}}</h2>
    <School  name2='zhangs' :num='12'/>
  </div>
</template>

<script>
import  School from './School.vue'
export default {
  data() {
    return {
      name:'tom'
    }
  },
  components:{
    School
  }
}
</script>

<style>

</style>