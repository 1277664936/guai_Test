import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Person from '../pages/Person'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    name:'news',
                    path:'news',
                    component:News
                },{
                    name:'message',
                    path:'message',
                    component:Message,
                    children:[{
                        name:'person',
                        path:'person',
                        component:Person,
                        props(route){
                            return {
                                name:route.query.name,
                                age:route.query.age,
                                person:route.query.persons
                            }
                        }
                    }]
                }
            ]
        }
    ]
})