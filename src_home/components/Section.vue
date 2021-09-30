<template>
        <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model.lazy.trim="value"/>&nbsp;
            <button @click="getresponse">Search</button>
        </div>
        </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            value:''
        }
    },
    methods: {
        getresponse(){
                     axios.get(`https://api.github.com/search/users?q=${this.value}`).then(
                (respson) => {
                    
                    this.$bus.$emit('getreponse',respson)
                },
                (err) => {
                    console.log(err);
                }
        )
        }
    },
    mounted(){
        
    }

}
</script>

<style>

</style>