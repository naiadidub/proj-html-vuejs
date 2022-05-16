<template>
    <div>
        <div class="col-4">
            <ProductCard v-for="(card, index) in myArray" :key="index"
            :titolo="card.title"
            :prezzo="card.price"
            :src="card.path"
            />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import shopArray from '../MainArray'
export default {
  name: 'FeaturedProducts',
  components: {
    ProductCard,
  },
  computed:{
    myArray(){
      return  shopArray
      
    },
    created(){
      return console.log(this.myArray)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>