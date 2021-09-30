<template>
  <div>
    <School>
      <template slot="test">
        <div>
         
          <input type="text" name="" id="">
        </div>
      </template>
    </School>
     
    <School>
        <template slot="age">
                <div>
                  <input type="button" value="点击">
                </div>
        </template>
    </School>
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import School from './components/School.vue'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  components:{School}
}
</script>

<style>
  div{
    display: flex;
    /* align-content: space-between; */
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly
  }
</style>