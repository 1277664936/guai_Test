<template>
  <div>
    <button @click="fleg=!fleg">点击</button>
    <transition-group 
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInLeft"
      leave-active-class="animate__fadeOutUpBig" 
      appear
      >
        <h2 v-show="fleg" key="1">测试</h2>
        <h2 v-show="fleg" key="2">测试1</h2>
    </transition-group>
    <button @click="test2">dainj2</button>
    <!-- </transition> -->
  
  </div>
</template>

<script>
import "animate.css"
import axios from 'axios'
console.log(axios);

// import School from './components/School.vue'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      fleg:true
    }
  },
  methods: {
    test2(){    

      axios.get('http://localhost:8080/students').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
  }
}
}
</script>

<style>
h2{
  background-color: red;
}
.test_htwo-enter{
  transform: translateX(-100%);
}
.test_htwo-leave{
  transform: translateX(0px);
}
.test_htwo-leave-to{
  transform: translateX(-100%);
}
.test_htwo-enter-to{
  transform: translateX(0px);
}
.test_htwo-enter-active{
  transition:  all  0.5s linear;
}
.test_htwo-leave-active{
  transition: all  0.5s linear;
}
</style>