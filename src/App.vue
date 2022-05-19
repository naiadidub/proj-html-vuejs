<template>
  <div>
    <HeaderContent/>
    <JumbotronContent/>
    <MainContent/>
    <PromoBox/>
    <BigCarousel2/>
    <CommentContent/>
    <PostsContent/>
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
import CommentContent from './components/CommentContent.vue'
import PostsContent from './components/PostsContent.vue'
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
    BigCarousel2,
    CommentContent,
    PostsContent
},
  computed:{
    
  }
}
</script>

<style lang="scss">

</style>
