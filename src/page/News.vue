<template>
  <div>
         <ul>
            <li>news001</li><input type="text">
            <li>news002</li><input type="text">
            <li>news003</li><input type="text">
        </ul>
        <button @click="Push">到About</button>
  </div>
</template>

<script>
export default {
    name:'News',
    methods: {
      Push(){
        this.$router.push({
          name:'about'
        })
        // console.log(this.$route);
      }
    },
    activated() {
      // console.log('activated------enter');
    },
    deactivated(){
      // console.log('deactivated-------leave');
    }
}
</script>

<style>

</style>