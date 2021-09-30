<template>
  <div>
    <h2 >{{name}}</h2>
    <School  name2='zhangs' :num='12'/>
  </div>
</template>

<script>
import  School from './School.vue'

import mixing from '../mixin'
export default {
  data() {
    return {
      name:'tom'
    }
  },
  components:{
    School
  },

  mixins:[mixing]
}
</script>

<style>

</style>