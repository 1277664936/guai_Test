<template>
  <div>
      <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'tom'
        }
    },
    mounted() {
        this.$bus.$emit('subning',this.name)
    },
}
</script>

<style>

</style>