<template>
  <button :class="btnColor ? btnColor : ''">
    <slot></slot>
    <img v-if="cartIcon" src="../assets/cart.svg" alt="Cart Icon" class=" h-10 w-10" />
  </button>
</template>

<script>
export default {
  props: {
    btnColor: String,
    cartIcon: Boolean
  }
};
</script>