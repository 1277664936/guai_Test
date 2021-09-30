<template>
  <div>
      <h2>{{name}}</h2>
      <div class="red">
          232
      </div>
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
    .red{
        color: red;
        background-color: yellow;
    }
    h2{
        color: pink;
    }
</style>