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
                        <transition name="slide-fade">
                                <div class="hoverdio" v-if="show">hello</div>
                        </transition>
                        <img @mouseover="show = true" @mouseleave="show = false" src="../assets/imgs200x260/black_elegant_leather_jacket-200x260.jpg" alt="">
                    </div>
                   <h6>black leather jacket</h6>
                   <p>man jacket jeans</p>
                   <span class="prezzo-scontato text-primary">$235</span><span class="text-primary">$200</span>
                </div>
                <div class="col-3">
                    <div>
                        <img src="../assets/imgs200x260/black_leather_suit-200x260.jpg" alt="">
                    </div>
                   <h6>black elegant jacket</h6>
                   <p>man jackets</p>
                   <span class="text-primary">$176</span>
                </div>
                <div class="col-3">
                    <div>
                        <img src="../assets/imgs200x260/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="">
                    </div>
                   <h6>blue jacket and streepie tee</h6>
                   <p>man jackets suits</p>
                   <span class="text-primary">$580</span>
                </div>
                <div class="col-3">
                    <div>
                        <img src="../assets/imgs200x260/modern_black_leather_suit-200x260.jpg" alt="">
                    </div>
                   <h6>modern black leather suit</h6>
                   <p>man jackets</p>
                   <span class="text-primary">$96</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VetrinaContent',
    data(){
        return{
            show: false
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
    background-color: black;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>