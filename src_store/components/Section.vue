<template>
  <div>
      Section组件
      <br>
      num：<select name="" id="" v-model.number="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
      </select>
      <button @click="addSelect(select)">+1</button>
      <button @click="jian(select)">-1</button>
      <h2>sum:{{sum}}</h2>
      <h2>姓名:{{personName}}</h2>
      <h2>年龄:{{personAge}}</h2>
      <h2>{{getadd}}</h2>
      <h2 v-for="(p,index) in person" :key="index">{{p}}</h2>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name:'Section',
    data() {
        return {
            select:1
        }
    },
    computed:{  
        ...mapState('Section',['sum','personName','personAge']),
        ...mapGetters('Section',['getadd']),
        ...mapState('List',['person']),
    },
    methods: {
        ...mapActions('Section',{'addSelect':'add'}),
        ...mapMutations('Section',{'jian':'JIAN'})
    },
    mounted() {
        console.log(this.$store);
        console.log(nanoid());
    },

}
</script>

<style>

</style>