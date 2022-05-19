<template>
  <div>
    <HeaderContent/>
    <JumbotronContent/>
    <MainContent/>
    <PromoBox/>
    <BigCarousel2/>
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
import MainContent from './components/MainContent.vue'
import PromoBox from './components/PromoBox.vue'
import BigCarousel2 from './components/BigCarousel2.vue'
export default {
  name: 'App',
  components: {
    HeaderContent,
    JumbotronContent,
    FooterOne,
    BrandsContent,
    SubsctibeSection,
    LinksSection,
    MainContent,
    PromoBox,
    BigCarousel2
},
  computed:{
    
  }
}
</script>

<style lang="scss">

</style>
