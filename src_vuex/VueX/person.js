export default {
    namespaced:true,
    actions:{

    },
    mutations:{
        SumJian(state,sum){
            console.log(sum);
            sum -= 1
        }
    },
    state:{
        jian2:0,
        person:[{
            id:'001',
            name:'zhangsan',
            age:23
        },{
            id:'002',
            name:'lisi',
            age:99
        },{
            id:'003',
            name:'wanger',
            age:67
        }
    ]
    },
    getters:{

    }
}