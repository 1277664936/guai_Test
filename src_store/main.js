import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './Vuex/Store'
new Vue({
    el: '#app',
    store,
    render(r) {
        return r(App)
    },
   
})
// console.log(Store);