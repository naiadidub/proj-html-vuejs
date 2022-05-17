<template>
    <div>
        <div class="col">
            <h6 class="mb-5">ON SALE</h6>
            <ProductCard v-for="(card, index) in myArray" :key="index"
            :titolo="card.title"
            :prezzo="card.price"
            :src="card.path"
            :vote="card.vote"
            :prezzoScontato="card.salePrice"
            :reviu="card.review"
            :sale="card.inSconto"
            />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import shopArray from '../MainArray'
export default {
    name: 'OnSaleProducts',
    components: {
    ProductCard,
    },
    computed:{
        myArray(){
        return shopArray.filter(product => product.salePrice !== '');
      
    },
    created(){
      return console.log(this.myArray)
    }
  }
    
}
</script>

<style lang="scss" scoped>

</style>