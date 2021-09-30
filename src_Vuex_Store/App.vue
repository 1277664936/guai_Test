<template>
  <div>
    <h2>App:</h2>
    <select name="" id="" v-model.number="option">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(option)">点击</button>
    <!-- <h2>{{$store.state.num}}</h2> -->
    <h2>{{num}}</h2>
    <!-- <h2>{{$store.getters.full}}</h2> -->
    <h2>{{full}}</h2>
    <h2>{{person.length}}</h2>
  </div>
</template>

<script>
// import Person from './component/Person.vue'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name:'App',
  data() {
    return {
      option:1
    }
  },
  computed:{
    ...mapState('Test',['num']),
    ...mapState('Person',['person']),
    ...mapGetters('Test',['full']),

  },
  methods: {
    ...mapActions('Test',{add:'jia'})
    // jia(){
    //   this.$store.dispatch('jia',this.option)
    // }
  },
  mounted(){
    console.log(this.$store);
  }
}
</script>

<style>

</style>