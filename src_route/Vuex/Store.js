import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const Section = {
    namespaced:true,
    actions:{
        add(mixstore,value){
            mixstore.commit('add',value)
        }
    },
    mutations:{
        add(store,value){
            store.sum += value
        },
        JIAN(store,value){
         store.sum -= value
        }
    },
    state:{
        sum:0,
        personName:'张三',
        personAge:20
    },
    getters:{
        getadd(store){
           return store.sum * 10
        }
    }
}
const List = {
    namespaced:true,
    actions:{

    },
    mutations:{

    },
    state:{
        person:['zhangsan','lisi','wanger']
    },
    getters:{
       
    }
}
export default new Vuex.Store({
    modules:{
        Section,
        List
    }
    
})