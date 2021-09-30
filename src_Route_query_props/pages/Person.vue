<template>
  <div>
      <!-- <h2>{{$route.query.name}}---{{$route.query.age}}</h2> -->
      <h2>{{person.name}}--{{person.age}}</h2>
  </div>
</template>

<script>
export default {
    name:'Person',
    props:['name','age','person'],
    mounted(){
        console.log(this.$route.query.persons);
        console.log(this.$route.query.name);
    }
}
</script>

<style>

</style>