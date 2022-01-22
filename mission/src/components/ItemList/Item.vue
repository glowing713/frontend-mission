<template>
  <div class="item-list-item">
    <div data-test="thumbnail" class="thumbnail-container">
      <img :src="thumbnail" alt="404 not found" />
    </div>
    <div data-test="content" class="content-container">
      <div data-test="price-info" class="price-info">
        <span data-test="price" class="price">{{ finalPrice }}</span>
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
      return this.price * (100 - this.discountRate) * 0.01;
    },
  },
};
</script>

<style>
</style>
