<template>
  <div class="basic-info">
    <div class="product-name" data-test="product-name">{{ name }}</div>
    <div class="product-price" data-test="product-price">
      <span class="discount-rate" v-if="isOnSale">{{ discountRate }}%</span>
      <span class="origin-price">{{ finalPrice }}</span>
      <span class="discount-origin-price" v-if="isOnSale">{{ originalPrice }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    name: { type: String, default: '' },
    price: { type: Number, default: 0 },
    original_price: { type: Number, default: 0 },
  },
  computed: {
    isOnSale() {
      return !(this.price === this.original_price);
    },
    discountRate() {
      if (this.price === this.original_price) {
        return 0;
      }
      return Math.ceil((this.price / this.original_price) * 100);
    },
    finalPrice() {
      return this.price.toLocaleString();
    },
    originalPrice() {
      return this.original_price.toLocaleString();
    },
  },
};
</script>

<style>
.basic-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0 0 20px;
  font-size: 23px;
}

.product-price {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.discount-rate {
  font-weight: bold;
  color: #ff5160;
  display: flex;
  align-items: flex-end;
  margin: 0 2px 0 0;
}

.origin-price {
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  margin: 0 2px 0 2px;
}

.discount-origin-price {
  color: #AAACB2;
  font-size: 15px;
  text-decoration: line-through;
  display: flex;
  align-items: flex-end;
  margin: 0 2px 0 2px;
}
</style>
