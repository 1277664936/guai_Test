import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './Store/index'
new Vue({
    el: '#app',
    render(r) {
        return r(App)
    },
    store
})