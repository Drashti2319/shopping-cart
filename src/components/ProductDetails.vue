<template>
  <div class="w-full h-full flex md:flex-row flex-col justify-center">
    <div class=" flex justify-center   ">
      <img :src="currentProduct.image" alt="" />
    </div>
    <div class="w-full h-full justify-center md:p-0 p-5">
      <h2 class="text-xl font-bold pa-5">{{ currentProduct.name }}</h2>
      <p class="text-lg pt-5">{{ currentProduct.details }}</p>
      <span class="text-base pt-5">Rs {{ currentProduct.price }}. 00</span>
      <div class="w-full justify-end mt-4">
        <BaseButton
          btn-color="bg-blue-500"
          class="text-white text-lg px-3 py-2 rounded-lg hover:shadow-xl"
          @click.native="addProductToCart(currentProduct)"
        >
          Buy Now
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },

  computed: {
    ...mapGetters({
      currentProduct: "getCurrentProduct",
    }),
  },

  methods: {
    ...mapActions(["addProduct", "showOrHiddenModal"]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },
};
</script>