<template>
  <div>
    <h1>tom</h1>
    <!-- <School @getSchool='school'/> -->
    <School ref="school"/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name:'App',
  components:{
    School
  },
  mounted() {
    console.log(this.$refs.school);
    this.$refs.school.$on('getSchool',(person)=>{
        return this.array=person
        // console.log(person);
        // console.log(this);
    })
  },
  methods: {
    // school(person){
    //   console.log(this);
    //   console.log(person)
    // }
  },
  data() {
    return {
      name:'tom',
       array:[]
    }
  },
}
</script>

<style>

</style>