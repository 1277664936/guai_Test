<template>
  <div>
      
      <!-- <h2>{{$route.params.id}}------{{$route.params.title+$route.params.id}}</h2> -->
      <h2>{{id}}---{{title+id}}</h2>
      <button @click="Resplace">Resplace</button>
  </div>
</template>

<script>
export default {
    name:'Title',
    props:['id','title'],
    methods: {
        Resplace(){
            this.$router.replace({
                name:'about'
            })
        }
    },
    mounted() {
    },
}
</script>

<style>

</style>