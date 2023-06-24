<template>
  <header class="shadow-xl sticky top-0 bg-white">
    <nav class="">
      <div class="w-full flex justify-between ">
        <div class="flex flex-row justify-center p-4">
          <router-link to="/">
            <h4 class="text-xl font-extrabold">Shopping Cart</h4>
          </router-link>
         
        </div>
        <div class="flex flex-row justify-center p-4">
          <h4 class="text-center p-2">{{ getProductsInCart.length }} No of Products</h4>
          <BaseButton :cartIcon="true" class="pr-2"></BaseButton>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButton from "./BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  computed: {
    ...mapGetters([
      'getProductsInCart'
  ]),

  getTotalProducts() {
    localStorage.getItem('productsInCart').length
  }

  }
};
</script>

<style>
</style>