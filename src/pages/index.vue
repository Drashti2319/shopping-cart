<template>
  <div class="">
    <div class="w-full h-full d-flex flex-row">

      <ProductsList :products="getProducts" @getProductDetails="getProductDetails" />
    </div>

    <div id="dialog">
      <!-- <ProductDetails /> -->
    </div>
  </div>
</template>

<script>
import  {mapGetters} from 'vuex';
import ProductsList from "@/components/ProductsList.vue";
// import ProductDetails from '@/components/ProductDetails.vue';
export default {
layout: "Default",
components: {
  ProductsList,
  // ProductDetails
},
data() {
  return {
   
  }
},
methods: {
  getProductDetails(product) {
    console.log("product", product)
    console.log("this.currentProduct",this.currentProduct)
  }
},
computed: {
  ...mapGetters([
    'getProducts',
    'getCurrentProduct'
  ])
}
}
</script>

<style>

</style>