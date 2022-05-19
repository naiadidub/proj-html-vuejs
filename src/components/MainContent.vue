<template>
    <div>
        <VetrinaContent/>
        <BigCarousel/>
        
    </div>
</template>

<script>
import VetrinaContent from './VetrinaContent.vue'
import BigCarousel from './BigCarousel.vue'
export default {
    name: 'MainContent',
    components:{
        VetrinaContent,
        BigCarousel,
        
    }
}
</script>

<style lang="scss" scoped>

</style>