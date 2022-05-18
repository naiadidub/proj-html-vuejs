<template>
    <div id="jumbojumbo">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 class="m-3 bigtitle text-white" >Brand New Arrivals</h1>
            <h5 class="m-3 text-white">NEW COLLECTION FROM NEW YORK</h5>
            <div>
               <button type="button" class="btn btn-outline-light m-3"> VIEW ALL</button>
                <button type="button" class="btn btn-outline-light m-3">LOCKBOOK</button> 
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'JumbotronContent'
}
</script>

<style lang="scss" scoped>
#jumbojumbo{
    width: 100%;
    height: 650px;
    background-image: url(../assets/home1_slide_three_bg_2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
}
.bigtitle{
    font-size: 100px;
}
</style>