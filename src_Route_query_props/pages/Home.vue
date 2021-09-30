<template>
   <div class="panel-body">
        <h2>我是Home的内容</h2>
        <div>
                <ul class="nav nav-tabs">
                  <li>
                      <router-link class="list-group-item" replace active-class="active" to="/home/news">News</router-link>
                    <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
                  </li>
                  <li>
                      <router-link class="list-group-item" replace active-class="active" :to="{
                                name:'message'
                          }">Message</router-link>
                    <!-- <a class="list-group-item " href="./home-message.html">Message</a> -->
                  </li>
                </ul>
               <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'Home',
}
</script>

<style>

</style>