import Vue from 'vue'
import App from './App.vue'
// import person from './install.js'
// Vue.use(person)
import { sun } from './install.js'
sun()
console.log('aaaaaaaaaaa');
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render(h) {
        return h(App)
    },
    // render: h => h(App),
})