<template>
<div class="container">
      <VueSlickCarousel v-bind="settings">
    
        <div><img src="../assets/imgs231x200/black_elegant_leather_jacket-231x300.jpg" alt=""></div>
        <div><img src="../assets/imgs231x200/black_leather_jacket-231x300.jpg" alt=""></div>
        <div><img src="../assets/imgs231x200/blue_leather_jacket-231x300.jpg" alt=""></div>
        <div><img src="../assets/imgs231x200/hipster_black_top-231x300.jpg" alt=""></div>
        <div><img src="../assets/imgs231x200/leather_gloves-231x300.jpg" alt=""></div>
        <div><img src="../assets/imgs231x200/modern_leather_boots-231x300.jpg" alt=""></div>
        <div><img src="../assets/imgs231x200/spring_printed_dress-231x300.jpg" alt=""></div>
     
  </VueSlickCarousel>
</div>

</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'BigCarousel',
    components: { VueSlickCarousel },
    data(){
        return{
            settings:{
            "dots": true,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "touchThreshold": 5
        }       
        }    
        
    }
    
  }
</script> 
