<template>
  <div class="cart-page" data-test="cart-page">
      <cart-header />
  </div>
</template>

<script>
import CartHeader from '@/components/CartPage/CartHeader.vue';

export default {
  name: 'CartPage',
  components: { CartHeader },
};
</script>

<style scoped>
.cart-page {
    width: 100%;
    height: 100%;
}
</style>
