<template>
  <div>
    <h2 v-for="(p,index) in person" :key="index">{{p}}</h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Person',
    computed:{
        ...mapState(['person'])
    }
}
</script>

<style>

</style>