<template>
  <div>
       <ul>
                    <li v-for="p in person" :key="p.id">
                        <router-link :to="{
                            name:'person',
                            query:{
                                persons:p,
                                name:p.name,
                                age:p.age
                            }
                        }">message</router-link>&nbsp;&nbsp;
                      <!-- <a href="/message1">{{p.name}}</a>&nbsp;&nbsp; -->
                    </li>
                    <router-view></router-view>
        </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Message',
    data() {
        return {
            person:[{
                id:nanoid(),
                name:'zhangsan',
                age:10
            },{
                id:nanoid(),
                name:'lisi',
                age:39
            },{
                id:nanoid(),
                name:'wanger',
                age:99
            }
            ]
        }
    },

}
</script>

<style>

</style>