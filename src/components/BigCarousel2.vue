<template>
    <div class="my-5">
        <div class=" container ">
            <div class="d-flex  justify-content-center mt-5">
                <div></div>
                <h1>New arrivals</h1>
                <div></div>
            </div>
            <div class="d-flex  justify-content-center">
                <p class="text-secondary">BREND NEW PRODUCT FROM BEST DESIGNERS</p>
            </div>
        </div>
        <div>
        <VueSlickCarousel v-bind="settings">
            <div><img src="../assets/imgs400x520/black_elegant_leather_jacket-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/black_leather_jacket-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/black_leather_suit-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/blue_leather_jacket-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/brown_dress_shoes-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/casual_leather_belts-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/hipster_black_top-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/leather_gloves-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/modern_black_leather_suit-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/modern_leather_boots-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/modern_love_tee-400x520.jpg" alt=""></div>
            <div><img src="../assets/imgs400x520/spring_printed_dress-400x520.jpg" alt=""></div>
        </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'BigCarousel2',
    components: { VueSlickCarousel },
    data(){
        return{
            settings:{
            "dots": true,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 5,
            "slidesToScroll": 1,
            "touchThreshold": 2
        }       
        }    
        
    }
}
</script>

<style lang="scss" scoped>

</style>