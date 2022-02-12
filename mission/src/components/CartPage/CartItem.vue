<template>
  <div class="cart-item-container" data-test="cart-item">
      <input type="checkbox" class="purchase-check">
  </div>
</template>

<script>
import cartItemModel from '@/model/CartItem';

export default {
  name: 'CartItem',
  props: {
    item: cartItemModel,
  },
};
</script>

<style>
</style>
