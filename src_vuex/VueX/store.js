import Vuex from 'vuex'
import Vue from 'vue'
import FisDate from './FisDate'
import Person from './person'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        FisDate,
        Person
    }
  
})