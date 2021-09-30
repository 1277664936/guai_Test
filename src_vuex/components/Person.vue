<template>
  <div>
      Person:<select v-model.number="num">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="jian(sum)">-1</button>
        <h2 v-for="p in person" :key="p.id">{{p.name}}----{{p.age}}</h2>
        <h1>{{jian2}}</h1>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    data() {
        return {
            num:1
        }
    },
    computed:{
        ...mapState('FisDate',['sum']),
        ...mapState('Person',['person','jian2'])
    },
    methods: {
        ...mapMutations('Person',{'jian':'SumJian'})  
    },
    mounted() {
      
    },
}
</script>

<style>

</style>