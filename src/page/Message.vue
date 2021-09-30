<template>
   <div>
        <ul>
            <li v-for="(p,index) in person" :key="index">
                <router-link :to="{
                    name:'title',
                  /*  query:{
                        title:title,
                        id:p
                    },*/
                  
                    params:{
                        title:title,
                        id:p
                    }
                }">{{title+p}}</router-link>&nbsp;&nbsp;
                <button @click="push(p)">push</button>
                <button @click="replace(p)">replace</button>
                <!-- <a href="/message1">{{title+p}}</a>&nbsp;&nbsp; -->
            </li>
            <!-- <li>
                <a href="/message2">message002</a>&nbsp;&nbsp;
            </li>
            <li>
                <a href="/message/3">message003</a>&nbsp;&nbsp;
            </li> -->
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            title:'meessage',
            person:['001','002','003']
        }
    },
    methods: {
        push(p){
            this.$router.push({
                name:'title',
                  params:{
                        title:this.title,
                        id:p
                    }
            })
        },
        replace(p){
            this.$router.replace({
                name:'title',
                 params:{
                        title:this.title,
                        id:p
                    }
            })
        }
    },

}
</script>

<style>

</style>