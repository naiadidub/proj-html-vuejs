<template>
<div>
    <div class="bordercontainer">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <i class="fa-brands fa-facebook-f   mx-3"></i> 
                            <i class="fa-brands fa-twitter  mx-3"></i>
                            <i class="fa-brands fa-instagram mx-3" ></i>
                            <i class="fa-brands fa-youtube mx-3"></i>
                </div>
                <div class="col">
                    <div class="d-flex">
                        <div class="d-flex px-3">
                        <span>Shopping chart</span>
                        </div>
                        <div class="d-flex px-3">
                            <span>My Account</span>
                        </div>
                        <div class="d-flex px-5">
                            <h6><i class="fa-solid fa-cart-shopping"></i> CART</h6>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    <div class="bordercontainer">
        <div class="container">
            <div class="row py-3">
                <div class="col-2">
                    <img src="../assets/classic_shop_logo1x.png" alt="">
                </div>
                <div class="col-10 d-flex justify-content-end align-items-center">
                    <div class="mx-3">
                        <span>Home</span> <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="mx-3">
                        <span>Shop</span> <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="mx-3"> 
                        <span>Products</span> <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="mx-3">
                        <span>Categories</span> <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="mx-3">
                        <span>News</span>
                    </div>
                    <div class="mx-3">
                        <span>Elements</span> <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="mx-3">
                        <button type="button" class="btn btn-primary">SHOP NOW!</button>
                    </div>
                    <div class="mx-3">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'HeaderContent'
}
</script>

<style lang="scss" scoped>
.bordercontainer{
    border-bottom: 1px solid rgb(199, 199, 199);
}
</style>