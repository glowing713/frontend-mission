<template>
  <div class="cart-page" data-test="cart-page">
    <cart-header />
    <div class="cart-contents" data-test="cart-content-container">
      <content-header />
      <div class="cart-products" data-test="cart-product-container">
        <p class="title">배송상품</p>
      </div>
      <content-footer />
    </div>
  </div>
</template>

<script>
import CartHeader from '@/components/CartPage/CartHeader.vue';
import ContentHeader from '@/components/CartPage/ContentHeader.vue';
import ContentFooter from '@/components/CartPage/ContentFooter.vue';

export default {
  name: 'CartPage',
  components: { CartHeader, ContentHeader, ContentFooter },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    removeItem(id) {
      this.$store.commit('delCartItem', id);
    },
    setItems() {
      this.$store.commit('setCartItems');
    },
  },
  created() {
    this.setItems(); // 가상 데이터를 state.cartItems에 할당
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
  color: #1f1f1f;
}

.cart-page {
  height: 100%;
  background-color: #e7e7e7;
}

.cart-contents {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cart-products {
  margin-top: 7px;
  background-color: white;
}

.cart-products .title {
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0 15px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
