<template>
  <div>
    <Section></Section>
    <List></List>
  </div>
</template>

<script>
import Section from './components/Section.vue'
import List from './components/List.vue'
export default {
  data() {
    return {
      num:0
    }
  },
  components:{Section,List},
}
</script>

<style>

</style>