<template>
  <div class="cart-item-container" data-test="cart-item"></div>
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
