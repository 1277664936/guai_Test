import Vue from 'vue'
import App from './App.vue'
new Vue({
    el: '#app',
    render(r) {
        return r(App)
    },
    beforeCreate() {
        Vue.prototype.$bus = this;
        // debugger;
        // console.log(this);
    },
    // mounted() {

    //     Vue.prototype.$bus = this;
    //     console.log(this);

    // },
})