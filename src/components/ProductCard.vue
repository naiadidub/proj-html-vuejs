<template>
    <div class="d-flex justify-content-between border-bottom  size">
        <div>
            <h6>{{titolo}}</h6>
            <div class="d-flex flex-row">
                <span v-for="(n, index) in votoInt" :key="index">
                    <i  class="fa-solid fa-star blue"></i>
                </span>
            </div>
            <div class="d-flex">
                <h5 :class="{line : sale}">${{prezzo}}</h5> 
                <h5 v-if="prezzoScontato !== ''">{{'$'+prezzoScontato}}</h5> 
            </div>
            <h6 v-if="reviu !== ''">{{'by' + '' + reviu}}</h6>  
        </div>
        <img class="card-img" :src="require(`../assets/120x156images/${src}`)" alt=""> 
         
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    data(){
        return{
            saleProduct: false
        }
    },
    props:{
        titolo: String,
        prezzo: Number,
        src: String,
        vote: Number,
        prezzoScontato: String,
        reviu: String,
        sale: Boolean
    },
    computed: {
        votoInt(){
            return this.vote
        },
        
    }
}
</script>

<style lang="scss" scoped>
.card-img{
    width: 100px;
    height: 100px;
}
.line{
    text-decoration: line-through;
}
.blue{
    color:rgb(0, 89, 255);
}
.size{
    height: 110px;
}
</style>
