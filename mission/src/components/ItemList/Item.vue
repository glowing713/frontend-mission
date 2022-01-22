<template>
  <div class="item-list-item">
    <div data-test="thumbnail" class="thumbnail-container">
      <img :src="thumbnail" alt="404 not found" />
    </div>
    <div data-test="content" class="content-container">
      <div data-test="price-info" class="price-info">
        <span v-if="isOnSale" data-test="discount-rate" class="discount-rate">{{
          discountRate
        }}</span>
        <span data-test="price" class="price">{{ finalPrice }}</span>
      </div>
      <div class="market-info">
        <span data-test="market-name" class="market-name">{{
          marketName
        }}</span>
      </div>
      <div class="item-info">
        <span data-test="item-name" class="item-name">{{ productName }}</span>
      </div>
      <div class="sell-info">
        <span data-test="sell-count" class="sell-count">
          {{ sold }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    thumbnail: String,
    price: Number,
    discountRate: Number,
    marketName: String,
    productName: String,
    sold: Number,
  },
  computed: {
    finalPrice() {
      return (this.price * (100 - this.discountRate) * 0.01).toLocaleString();
    },
    isOnSale() {
      return this.discountRate > 0;
    },
  },
};
</script>

<style>
</style>
