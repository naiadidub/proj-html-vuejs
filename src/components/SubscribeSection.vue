<template>
    <div class="blackbg">
        <div class="container">
            <div class="row padding">
                <div class="col-8 d-flex">
                    <i class="fa-regular fa-envelope logoemail"></i>
                    <h2 class="text-white mx-5">Subscribe now and get special offers</h2>
                </div>
                <div class="col-4 d-flex">
                    <input type="text" class="inputsize" placeholder="insert your email">
                    <button type="button" class="btn btn-primary buttonstyle">SEND</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubsctibeSection'
}
</script>

<style lang="scss" scoped>
.blackbg{
    background-color: #303337;
}
.logoemail{
    font-size: 40px;
    color: gray;
}
.inputsize{
    width: 600px;
    height: 40px;
    border-radius:20px ;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 80px;
    margin-right: 40px;
}
.buttonstyle{
    border-radius: 20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: -5px ;
}
.padding{
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>