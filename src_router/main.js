import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// import store from './Vuex/Store'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
new Vue({
    el: '#app',
    // store,
    render(r) {
        return r(App)
    },
    router
   
})
// console.log(Store);