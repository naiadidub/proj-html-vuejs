<template>
  <div>
    <FooterOne/>
    <BrandsContent/>
    <SubsctibeSection/>
    <LinksSection/>
  </div>
</template>

<script>
import FooterOne from './components/FooterOne.vue'
import BrandsContent from './components/BrandsContent.vue'
import SubsctibeSection from './components/SubscribeSection.vue'
import LinksSection from './components/LinksSection.vue'
export default {
  name: 'App',
  components: {
    FooterOne,
    BrandsContent,
    SubsctibeSection,
    LinksSection
  },
  computed:{
    
  }
}
</script>

<style lang="scss">

</style>
