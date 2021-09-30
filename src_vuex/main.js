import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './VueX/store.js'
new Vue({
    el: '#app',
    render(r) {
        return r(App)
    },
    store,
    mounted() {
     
    },
})