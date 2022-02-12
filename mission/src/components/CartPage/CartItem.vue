<template>
  <div class="cart-item-container" data-test="cart-item">
    <p class="checkbox-container">
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
          <span class="final-price" data-test="final-price"
            >{{ priceFmted }}원</span
          >
        </p>
      </div>
    </div>
    <p class="delete-btn-container" @click="emitDeleteItem">
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

<style scoped>
p {
  margin: 0;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-item-container {
  display: grid;
  grid-template-columns: 1.3fr 12fr 1fr;
  margin: 10px 15px;
}

.cart-item-container .checkbox-container {
  grid-column-start: 1;
  grid-column-end: 2;
  transform: scale(1.3);
}

.checkbox-container input {
  display: block;
  margin: 0;
}

.cart-item-container .item-info {
  grid-column-start: 2;
  grid-column-end: 3;
}

.cart-item-container .delete-btn-container {
  grid-column-start: 3;
  grid-column-end: 4;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 13px;
  color: #9e9e9e;
  font-size: 13px;
}

.item-info {
  display: flex;
}

.item-info img {
  border-radius: 6px;
}

.item-info .text-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  margin: 5px 0 5px 15px;
}

.text-info .product-name {
  color: #777;
}

.text-info .product-description {
  text-align: left;
}

.text-info .product-price {
  justify-content: flex-start;
}

.product-price span {
  margin-left: 3px;
}

.product-price .original-price {
  color: #777;
  text-decoration: line-through;
}

@media (min-width: 390px) {
  .item-info img {
    max-width: 90px;
  }
}

@media (min-width: 820px) {
  .item-info img {
    max-width: 100px;
  }
}

@media (min-width: 1024px) {
  .item-info img {
    max-width: 130px;
  }
}
</style>
