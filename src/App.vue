<template>
  <div>
    <FooterOne/>
    <FooterTwo/>
  </div>
</template>

<script>
import FooterOne from './components/FooterOne.vue'
import FooterTwo from './components/FooterTwo.vue'
export default {
  name: 'App',
  components: {
    FooterOne,
    FooterTwo
  },
  computed:{
    
  }
}
</script>

<style lang="scss">

</style>
