<template>
  <div class="basic-info">
    <div class="product-name" data-test="product-name">{{ name }}</div>
    <div class="product-price" data-test="product-price">
      <span class="discount-rate" v-if="discount">{{ discountRate }}%</span>
      <span class="origin-price">{{ finalPrice }}</span>
      <span class="discount-origin-price" v-if="discount">{{ colonNumber }}</span>
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
    colonNumber() {
      return String(this.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
  justify-content: flex-start;
}

.discount-rate {
  font-weight: bold;
  color: #C9974E;
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
