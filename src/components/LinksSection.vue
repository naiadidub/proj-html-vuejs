<template>
    <div>
        <div class="blackbg">
            <div class="container container-size ">
                <div class="row ">
                    <div class="col-3">
                        <img id="shop-logo" src="../assets/classic_shop_logo_footer.png" alt="">
                        <h6 class="text-white">12345 NORTH MAIN STREET</h6>
                        <h6 class="text-white">NEW YORK NY, 555</h6>
                        <h6 class="text-white">PHONE 3497038936</h6>
                        <h6 class="text-white">EMAIL: INFO@DICKHEAD.COM</h6>
                        <h6 class="text-white">WEB: THEME HASHFUSION</h6>
                        <div class="my-3">
                            <i class="fa-brands fa-facebook-f text-white  mx-3"></i> 
                            <i class="fa-brands fa-twitter text-white  mx-3"></i>
                            <i class="fa-brands fa-instagram text-white  mx-3" ></i>
                            <i class="fa-brands fa-youtube text-white  mx-3"></i>
                        </div>
                    </div>
                    <div class="col-3">
                        <TopRatedProducts class="text-white"/>
                    </div>
                    <div class="col-3">
                        <h6 class="text-white">RECENT POSTS</h6>
                        <div class="bordergray">
                            <i class="fa-solid fa-angle-right text-white"></i> <span class="text-white">Lorem ipsum dolor sit amet consectetur</span>  
                        </div>
                        <div class="bordergray">
                            <i class="fa-solid fa-angle-right text-white"></i> <span class="text-white">Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div class="bordergray">
                            <i class="fa-solid fa-angle-right text-white"></i> <span class="text-white">Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div class="bordergray">
                            <i class="fa-solid fa-angle-right text-white"></i> <span class="text-white">Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div class="bordergray">
                            <i class="fa-solid fa-angle-right text-white"></i> <span class="text-white">Lorem ipsum dolor sit amet consectetur</span> 
                        </div>
                        <div class="bordergray">
                            <i class="fa-solid fa-angle-right text-white"></i> <span class="text-white">Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                    </div>
                    <div class="col-3 d-flex flex-wrap height-tags">
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">black</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">boots</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">brow</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">casual</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">D&G</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">fabric</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">music</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">geay</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">hats</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">hipster</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">linez</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">multi-purpose</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">red</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">responsive</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">summer</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">snare</span> </div>
                        <div class="d-flex align-content-center bordertags"> <span class="text-white">kick</span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bigblackbg">
            <div class="container">
                <div class="row py-3">
                    <div class="col-3 d-flex justify-content-center">
                        <p class="text-white">copyright 2012-2020  <i class="fa-solid fa-grip-lines-vertical"></i></p>
                    </div>
                    <div class="col-3 d-flex justify-content-center">   
                        <p class="text-white">Avada themes by Themes  <i class="fa-solid fa-grip-lines-vertical"></i></p>
                    </div> 
                    <div class="col-3 d-flex justify-content-center">
                        <p class="text-white">all right reserved   <i class="fa-solid fa-grip-lines-vertical"></i></p>
                    </div>  
                    <div class="col-3 d-flex justify-content-center">  
                        <p class="text-white">Powered by world press  <i class="fa-solid fa-grip-lines-vertical"></i></p>
                    </div>
                </div>
                <div class="row justify-content-center py-3">
                    <div class="col-4">
                        <img id="trol" src="../assets/PW20_methods.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopRatedProducts from './TopRatedProducts.vue'
export default {
    name: 'LinksSection',
    components:{
        TopRatedProducts
    }
}
</script>

<style lang="scss" scoped>
.blackbg{
    background-color: #2B2E32;
}
#shop-logo{
    width: 200px;
    margin-bottom: 50px;
}
.bordergray{
    border-bottom: 1px solid rgb(82, 81, 81);
}
.bordertags{
    border: 1px solid gray;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}
.height-tags{
    height: 20px;
}
.container-size{
    padding-bottom: 100px;
    padding-top: 100px;
}
.bigblackbg{
    background-color: black;
}
#trol{
    height: 40px;
}
</style>