<template>
  <div>
    <HeaderContent/>
    <JumbotronContent/>
    <FooterOne/>
    <BrandsContent/>
    <SubsctibeSection/>
    <LinksSection/>
  </div>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue'
import JumbotronContent from './components/JumbotronContent.vue'
import FooterOne from './components/FooterOne.vue'
import BrandsContent from './components/BrandsContent.vue'
import SubsctibeSection from './components/SubscribeSection.vue'
import LinksSection from './components/LinksSection.vue'
export default {
  name: 'App',
  components: {
    HeaderContent,
    JumbotronContent,
    FooterOne,
    BrandsContent,
    SubsctibeSection,
    LinksSection,
},
  computed:{
    
  }
}
</script>

<style lang="scss">

</style>
