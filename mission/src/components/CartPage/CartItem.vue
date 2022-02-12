<template>
  <div class="cart-item-container" data-test="cart-item">
    <p>
      <input type="checkbox" class="purchase-check" />
    </p>
    <div class="item-info">
      <img :src="image" :alt="description" data-test="product-image" />
      <div class="text-info">
        <p data-test="product-name">{{ name }}</p>
      </div>
    </div>
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
