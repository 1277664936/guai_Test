import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import About from '../page/About'
import Home from '../page/Home'
import News from '../page/News'
import Message from '../page/Message'
import Title from '../page/Title'
const router = new Router({
    routes:[{
        name:'about',
        path:'/about',
        meta:{
            title:'关于'
        },
        component: About
    },{
        name:'home',
        path:'/home',
        meta:{
            title:'主页'
        },
        component: Home,
        children:[{
            
                name:'news',
                path:'news',
                meta:{
                    title:'News'
                },
                component: News,
                beforeEnter: (to, from, next) => {
                    if(to.meta.title != undefined){
                        // console.log('aaa');
                        document.title=to.meta.title
                     next()
                        // console.log(to);
                        // console.log(from);
                    }
                }
            },{
                name:'message',
                path:'message',
                meta:{
                    title:'Message'
                },
                component:Message,
                children:[{
                    name:'title',   
                        //使用params 必须需要这样写  id为传入的值    表示传入的参数 记得写    /:
                    path:'title/:id/:title',
                    component:Title,
                    props($route){
                        return {
                            id:$route.params.id,
                            title:$route.params.title
                        }
                    }
                }]
            }]  
    }]
})
// router.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
// })
// router.beforeEach((to,from,next)=>{
//     console.log(to);
//     console.log(from);
//     next()
// })
// router.afterEach((to)=>{
//     // console.log(to.meta.title);
//     if(to.meta.title != undefined){
//         // console.log('aaa');
//         document.title=to.meta.title
//         // console.log(to);
//         // console.log(from);
//     }
// })

export default router