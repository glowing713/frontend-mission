<template>
  <div class="basic-info">
    <div class="product-name" data-test="product-name">{{ name }}</div>
    <div class="product-price" data-test="product-price">
      <span class="discount-rate" v-if="discount">{{ discountRate }}%</span>
      <span class="origin-price">{{ finalPrice }}</span>
      <span class="discount-price" v-if="discount">{{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    name: String,
    price: Number,
    discountRate: Number,
    details: String,
    thumbnails: Array,
  },
  data() {
    return {
      discount: this.discountRate > 0,
    };
  },
  computed: {
    finalPrice() {
      const price = String(this.price * (100 - this.discountRate) * 0.01);
      return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
