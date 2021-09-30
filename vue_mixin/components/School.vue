<template>
  <div>
      <h2>{{age}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            age:13
        }
    },
    // props:['name',"name2",'num'],
    // props:{
    //     name:String,
    //     name2:String,
    //     num:Number
    // },
    props:{
        name:{
            type:String,
            // required:true, 
            default:'老王'
        }
    },
    mounted() {
        console.log(this.name);
        console.log(this);
        // console.log(this.name2);
        // console.log(this.num);
    },
}
</script>

<style>

</style>