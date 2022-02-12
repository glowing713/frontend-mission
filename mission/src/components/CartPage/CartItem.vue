<template>
  <div class="cart-item-container" data-test="cart-item">
    <p>
      <input type="checkbox" class="purchase-check" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    productNo: { type: String, default: '' },
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    price: { type: Number, default: 0 },
    originalPrice: { type: Number, default: 0 },
    description: { type: String, default: '' },
  },
};
</script>

<style>
</style>
