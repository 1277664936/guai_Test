<template>
  <div>
      <h2>{{name}}</h2>
      <button @click="click">uuuuu</button>
  </div>
</template>

<script>

export default {
data() {
    return {
        name:'tom'
    }
},
methods: {
    click(){
        console.log(this.x);
    }
},
mounted() {
    console.log(this.prototype);
},
}
</script>

<style>

</style>