<template>
    <div class="container my-5">
        <div class="row">
            <FeaturedProducts/>
            <OnSaleProducts/>
            <TopRatedProducts/>
            <LatestReviewProducts/>
        </div>
    </div>
</template>

<script>
import FeaturedProducts from './FeaturedProducts.vue'
import OnSaleProducts from './OnSaleProducts.vue'
import TopRatedProducts from './TopRatedProducts.vue'
import LatestReviewProducts from './LatestReviewProducts.vue'
export default {
    name: 'FooterOne',
    components: {
        FeaturedProducts,
        OnSaleProducts,
        TopRatedProducts,
        LatestReviewProducts
    }
}
</script>

<style lang="scss" scoped>

</style>