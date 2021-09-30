<template>
    <div>
        <h2>请选择的数</h2>
        <select name="" id="" v-model.number="option">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add(option)">+1</button>
        <h1>{{sum}}</h1>
        <h2>sum的10倍：{{Sumto}}</h2>
        <h2>{{person.length}}</h2>
    </div>
</template>

<script>
import {mapState,mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            option:1
        }
    },
    methods: {
        ...mapActions('FisDate',{'add':'jiaAdd'}),
    },
    computed:{
        ...mapState('Person',['person']),
        ...mapState('FisDate',['sum']),
        ...mapGetters('FisDate',['Sumto'])
    },
    mounted() {
        // console.log(this.$store.state.sum);
    },
}
</script>

<style>

</style>