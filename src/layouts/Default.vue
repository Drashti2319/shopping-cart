<template>
  <div>
    <BaseHeader/>
    <router-view></router-view>
  </div>

</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue"
export default {
components: {
  BaseHeader
}
}
</script>

<style>

</style>