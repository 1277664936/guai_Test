<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            age:12,
            name:''
        }
    },
    mounted() {
        // console.log('aaaaaa');
        // console.log(this.$bus);
        // debugger;
        // console.log('aaaa');
        this.$bus.$on('subning',(name)=>{
            // console.log('aaaaaa');
            this.name=name
            console.log(name);
            console.log(this);
        });
    },
}
</script>

<style>

</style>