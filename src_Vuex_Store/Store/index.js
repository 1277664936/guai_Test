import VueX from 'vuex'
import Vue from 'vue'
import Test from './test'
import Person from './person'
Vue.use(VueX)
export default new VueX.Store({
    modules:{
        Test,
        Person
    }
})