<template>
  <div>
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
              <div class="page-header"><h2>Vue Router Demo</h2></div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
              <div class="list-group">
                  <router-link class='list-group-item' replace active-class="active" to="/about">About</router-link>
                  <router-link class='list-group-item' replace active-class="active" to="/home">Home</router-link>
              </div>
            </div>
            <div class="col-xs-6">
                  <router-view></router-view>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name:'Main',
    mounted() {
        // console.log(this.$router);
    },
}
</script>

<style>

</style>