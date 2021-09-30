<template>
  <div>
      <ul>
          <li v-for="(p,index) in person" :key="index">{{p.name}}--{{p.age}}</li>
      </ul>
      <button @click="set">传入数据</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            person:[{
                name:'zhangsan',
                age:32
            },{
                name:'lisi',
                age:14
            },{
                name:'wangwu',
                age:99
            }]
        }
    },
    methods: {
        set(){
            // this.$emit('school',this.person)
            this.$emit('getSchool',this.person)
            console.log(this);
        }
    },

}
</script>

<style>

</style>