export default {
    namespaced:true,
    actions:{
        jia(minstore,value){
            minstore.commit('jia',value)
        }
    },
    mutations:{
        jia(store,value){
            store.num += value
        }
    },
    state:{
        num:0,
       
    },
    getters:{
        full(store){
            // console.log(store);
            return store.num * 5
        }
    }
}