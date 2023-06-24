<template>
<div class="flex flex-col md:grid md:grid-cols-3 justify-items-center ">
  <div class="max-w-2xl  overflow-hidden hover:shadow-lg flex md:flex-row flex-col md:m-4 m-2 md:p-5 p-2 border-blue-300 border-2 rounded-lg" v-for="(product, index) in products" :key="index">
  <img class="w-full h-40 object-contain" :src="product.image" :alt="product.altText">
  <div class="px-6 py-4">
    <router-link to="/product-details">
    <div class="font-bold text-xl mb-2"  @click="addCurrentProduct(product)">{{product.name}}</div>
  </router-link>
    <p class="text-gray-700 text-base" >
     {{ product.details }}
    </p>
    <div class="mt-5 flex justify-end align-center">
    <BaseButton btnColor="bg-blue-400 hover:shadow-lg rounded-lg text-white px-2 py-2"
          @click.native="addProductToCart(product)">
        Add to cart
      </BaseButton>
  </div>
  </div>
</div>

<div id="dialog">
  <!-- <product-details /> -->
</div>
</div>
</template>

<script>
import { mapActions } from "vuex";
import BaseButton from "./BaseButton.vue";
// import ProductDetails from './ProductDetails.vue';
export default {
  components: {
    BaseButton,
    // ProductDetails,
  },
  props: {
    products: {
      type: Array,
    },
  },
  data() {
    return {
      productList: [],
    }
  },
  methods: {
    ...mapActions(["addProduct", "currentProduct"]),

    addProductToCart(product) {
      this.addProduct(product);
     this.productList.push(product)
      localStorage.setItem("productsInCart", JSON.stringify(this.productList))
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style>
</style>