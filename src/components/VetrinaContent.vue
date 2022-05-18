<template>
    <div>
        <div class="container">
            <div class="d-flex  justify-content-center mt-5">
                <div></div>
                <h1>Featured Products</h1>
                <div></div>
            </div>
            <div class="d-flex  justify-content-center">
                <p class="text-secondary">MUST HAVE PRODUCTS FROM OUR BEST SELLERS</p>
            </div>
            <div class="d-flex  justify-content-center mt-3">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-secondary px-5">MAN</button>
                    <button type="button" class="btn btn-outline-secondary px-5">WOMAN</button>
                    <button type="button" class="btn btn-outline-secondary px-5">ACCESORIES</button>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-3">
                    <div>
                        <transition name="fade">
                                <div class="hoverdio d-flex justify-content-center align-items-center" v-if="show">
                                    <div class="add d-flex justify-content-center align-items-center">
                                        <i class="fa-regular fa-circle-check text-white"></i>
                                    </div>
                                </div>
                        </transition>
                        <img @mouseover="show = true" @mouseleave="show = false" src="../assets/imgs200x260/black_elegant_leather_jacket-200x260.jpg" alt="">
                    </div>
                   <h6>black leather jacket</h6>
                   <p>man jacket jeans</p>
                   <span class="prezzo-scontato text-primary">$235</span><span class="text-primary">$200</span>
                </div>
                <div class="col-3">
                    <div>
                        <transition name="fade">
                                <div class="hoverdio d-flex justify-content-center align-items-center" v-if="show1">
                                <div class="add d-flex justify-content-center align-items-center">
                                        <i class="fa-regular fa-circle-check text-white"></i>
                                    </div>
                                </div>

                        </transition>
                        <img @mouseover="show1 = true" @mouseleave="show1 = false" src="../assets/imgs200x260/black_leather_suit-200x260.jpg" alt="">
                    </div>
                   <h6>black elegant jacket</h6>
                   <p>man jackets</p>
                   <span class="text-primary">$176</span>
                </div>
                <div class="col-3">
                    <div>
                        <transition name="fade">
                                <div class="hoverdio d-flex justify-content-center align-items-center" v-if="show2">
                                <div class="add d-flex justify-content-center align-items-center">
                                        <i class="fa-regular fa-circle-check text-white"></i>
                                    </div>
                                </div>
                        </transition>
                        <img @mouseover="show2 = true" @mouseleave="show2 = false" src="../assets/imgs200x260/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="">
                    </div>
                   <h6>blue jacket and streepie tee</h6>
                   <p>man jackets suits</p>
                   <span class="text-primary">$580</span>
                </div>
                <div class="col-3">
                    <div>
                        <transition name="fade">
                                <div class="hoverdio d-flex justify-content-center align-items-center" v-if="show3">
                                <div class="add d-flex justify-content-center align-items-center">
                                        <i class="fa-regular fa-circle-check text-white"></i>
                                    </div>
                                </div>
                        </transition>
                        <img @mouseover="show3 = true" @mouseleave="show3 = false" src="../assets/imgs200x260/modern_black_leather_suit-200x260.jpg" alt="">
                    </div>
                   <h6>modern black leather suit</h6>
                   <p>man jackets</p>
                   <span class="text-primary">$96</span>
                </div>
            </div>
            
        </div>
        <div class="d-flex my-5">
            <div class="trol d-flex flex-column justify-content-center align-items-center">
                <h1 class="text-white ">Spring collection</h1>
                <h6 class="text-white mt-3">RICH AND CONFORTABLE</h6>
                <button type="button" class="btn btn-outline-light mt-3">VIEW MORE</button>
            </div>
            <div class="trol1  d-flex flex-column justify-content-center align-items-center">
               
                    <h1 class="text-white">Summer collection</h1>
                    <h6 class="text-white mt-3">BRIGHT AND COLORFUL</h6>
                <button type="button" class="btn btn-outline-light mt-3">VIEW MORE</button>
                
            </div>
            <div class="trol2 d-flex flex-column justify-content-center align-items-center">
              
                    <h1 class="text-white">Winter collection</h1>
                    <h6 class="text-white mt-3">STYLISH AND WARM</h6>
                <button type="button" class="btn btn-outline-light mt-3">VIEW MORE</button>
                
            </div>      
        </div>
    </div>
</template>

<script>
export default {
    name: 'VetrinaContent',
    data(){
        return{
            show: false,
            show1: false,
            show2: false,
            show3: false
        }
    }
}
</script>

<style lang="scss" scoped>
.prezzo-scontato{
    text-decoration: line-through;
    font-size: 12px;
}
.hoverdio{
    width: 200px;
    height: 260px;
    position: absolute;
    background-image: url(../assets/home1_slide_one_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.fade-enter-active,
.fade-leave-active {
    opacity: 0.7;
  transition: opacity 0.5s;
}
.add{
    width: 80px;
    height: 80px;
    background-color: black;
    border-radius: 50%;
}
.add i{
    font-size: 30px;
}

.trol{
    background-size: cover;
    background-image: url(../assets/seasonCollections/autumn_collection_bg.jpg);
    width: calc(100% / 3);
    height: 700px;
}
.trol1{
    background-size: cover;
    background-image: url(../assets/seasonCollections/spring_collection_bg.jpg);
    width: calc(100% / 3);
    height: 700px;
}
.trol2{
    background-size: cover;
     background-image: url(../assets/seasonCollections/winter_collection_bg.jpg);
     width: calc(100% / 3);
    height: 700px;
}
</style>