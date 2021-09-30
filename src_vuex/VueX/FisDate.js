export default {
    namespaced:true,
    actions:{
        jiaAdd(minstore,value){
            minstore.commit('jiaAdd',value)
        }
    },
    mutations:{
        jiaAdd(state,value){
            state.sum += value
        }
    },
    state:{
        sum:0
    },
    getters:{
        Sumto(state){
            return state.sum * 10  
        }
    }
}