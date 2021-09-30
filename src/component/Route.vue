<template>
  <div>
        <div>
            <div class="row">
                    <div class="col-xs-offset-2 col-xs-8">
                        <div class="page-header"><h2>Vue Router Demo</h2></div>
                    </div>
                    <button @click="forward">前进</button>
                    <button @click="back">后退</button>
                    <button @click='go'>go</button>
            </div>
            <div class="row">
                    <div class="col-xs-2 col-xs-offset-2">
                            <div class="list-group">
                                <!-- 点击需要去的地方 -->
                                <!-- <a class="list-group-item active" href="./about.html">About</a> -->
                                <router-link class="list-group-item" active-class="active" to="/about" >About</router-link>
                                
                                <!-- <a class="list-group-item" href="./home.html">Home</a> -->
                                <router-link  class="list-group-item" active-class="active" to="/home" >Home</router-link>
                             
                            </div>
                    </div>
                    <div class="col-xs-6">
                            <div class="panel">
                                <!-- 展现的地方 -->
                               <router-view></router-view>
                            </div>
                    </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'Route',
    methods: {
        back(){
            this.$router.back();
        },
        forward(){
            this.$router.forward()
        },
        go(){
            this.$router.go(-2)
        }
    },
    mounted() {
        // console.log(this.$router);
    },

}
</script>

<style>

</style>