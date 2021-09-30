import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './router/index'
new Vue({
    el: '#app',
    render(r) {
        return r(App)
    },
    router
})