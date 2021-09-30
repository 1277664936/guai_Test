import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render(r) {
        return r(App)
    },
    beforeCreate(){
        // console.log(this);
        // this.$bus=this
        Vue.prototype.$bus=this
        // console.log(this);
    },
})