<template>
    <div class="panel-body">
            <h2>我是Home的内容</h2>
             <div>
                <ul class="nav nav-tabs">
                  <li>
                      <router-link replace class='list-group-item' to="/home/news">News</router-link>
                    <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
                  </li>
                  <li>
                      <!-- <router-link class='list-group-item' to="/home/message">Message</router-link> -->
                      <router-link replace class="list-group-item" :to="{
                          name:'message'
                      }">Message</router-link>

                  </li>
                </ul>
                <keep-alive include="News">
                   <router-view></router-view>
                </keep-alive>
              
             </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    beforeRouteEnter (to, from, next) {
      console.log('enter............');
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('leave');
      next()
    }
}
</script>

<style>

</style>