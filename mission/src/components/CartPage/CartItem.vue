<template>
  <div class="cart-item-container" data-test="cart-item">
    <p>
      <input type="checkbox" class="purchase-check" />
    </p>
    <div class="item-info">
      <img :src="image" :alt="description" data-test="product-image" />
      <div class="text-info">
        <p class="product-name" data-test="product-name">{{ name }}</p>
        <p class="product-description" data-test="product-description">
          {{ description }}
        </p>
        <p class="product-price" data-test="product-price">
          <span
            class="original-price"
            data-test="original-price"
            v-if="isOnSale"
            >{{ originalPriceFmted }}원</span
          >
          <span class="final-price" data-test="final-price">{{ priceFmted }}원</span>
        </p>
      </div>
    </div>
    <p @click="emitDeleteItem">
      <i :class="['fas', 'fa-ban']" data-test="delete-button"></i>
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
  computed: {
    isOnSale() {
      return !(this.price === this.originalPrice);
    },
    priceFmted() {
      return this.price.toLocaleString();
    },
    originalPriceFmted() {
      return this.originalPrice.toLocaleString();
    },
  },
  methods: {
    emitDeleteItem() {
      this.$emit('deleteItem', this.productNo);
    },
  },
};
</script>

<style>
</style>
