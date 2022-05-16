<template>
    <div>
        <h6>{{titolo}}</h6>
        <div>
            <span v-for="(n, index) in votoInt" :key="index">
                <i  class="fa-solid fa-star"></i>
            </span>
        </div>
        <h5>${{prezzo}}</h5>   
          <img :src="require(`../assets/${src}`)" alt="">   
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props:{
        titolo: String,
        prezzo: Number,
        src: String,
        vote: Number,
        prezzoScontato: String
    },
    computed: {
        votoInt(){
            return this.vote
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
