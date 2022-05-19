<template>
    <div class="box-promo my-5 d-flex justify-content-center align-items-center">
        <div class="promobox1 mx-3 d-flex flex-column align-items-center justify-content-center ">
            <h1 class="text-white">70% Off</h1>
                    <h6 class="text-white mt-3">Lorem ipsum dolor sit amet consectetur </h6>
                <button type="button" class="btn btn-outline-light mt-3">VIEW MORE</button>
        </div>
        <div class="promobox2 mx-3 d-flex flex-column align-items-center justify-content-center ">
            <h1 class="text-white">Free shipping</h1>
                    <h6 class="text-white mt-3">Lorem ipsum dolor sit amet consectetur</h6>
                <button type="button" class="btn btn-outline-light mt-3">VIEW MORE</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'PromoBox'
}
</script>

<style lang="scss" scoped>
.box-promo{
    background-image: url(../assets/sfondi/bkgd_confetti-compressor.jpg);
    background-position-y: 50%;
    width: 100%;
    height: 500px;
}
.promobox1{
    background-image: url(../assets/promoBox/promo_box_1_bg.jpg);
    background-size: contain;
    width: 460px;
    height: 300px;
}
.promobox2{
    background-image: url(../assets/promoBox/promo_box_2_bg.jpg);
    background-size: contain;
    width: 460px;
    height: 300px;
}
</style>