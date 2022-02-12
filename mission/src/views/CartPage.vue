<template>
  <div class="cart-page" data-test="cart-page">
    <cart-header />
    <div class="cart-contents" data-test="cart-content-container">
      <content-header :checked="checked" :total-cnt="cartItemCount" />
      <div class="cart-products" data-test="cart-product-container">
        <p class="title">배송상품</p>
        <cart-item
          v-for="item in cartItems"
          :key="item.product_no"
          :product-no="item.product_no"
          :name="item.name"
          :image="item.image"
          :price="item.price"
          :original-price="item.original_price"
          :description="item.description"
          @delete-item="removeItem"
        />
      </div>
      <div class="total-price-container">
        <div class="total-price">
          <span class="price-label">총 상품금액</span
          ><span class="price">{{ totalPrice }}원</span>
        </div>
        <div class="total-discount">
          <span class="price-label">상품할인</span
          ><span class="price">{{ totalDiscount }}원</span>
        </div>
        <div class="shipping-price">
          <span class="price-label">배송비</span
          ><span class="price">전상품 무료배송</span>
        </div>
      </div>
      <content-footer :total-price="totalPrice" />
    </div>
  </div>
</template>

<script>
import CartHeader from '@/components/CartPage/CartHeader.vue';
import ContentHeader from '@/components/CartPage/ContentHeader.vue';
import ContentFooter from '@/components/CartPage/ContentFooter.vue';
import CartItem from '@/components/CartPage/CartItem.vue';

export default {
  name: 'CartPage',
  components: {
    CartHeader,
    ContentHeader,
    ContentFooter,
    CartItem,
  },
  data() {
    return {
      checked: [],
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    cartItemCount() {
      return this.cartItems.length;
    },
    totalPrice() {
      return this.cartItems.reduce((acc, curr) => acc + curr.price, 0);
    },
    totalDiscount() {
      return this.cartItems.reduce(
        (acc, curr) => acc + (curr.original_price - curr.price),
        0,
      );
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
  background-color: #e6e6e6;
  padding-bottom: 97px;
}

.cart-contents {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cart-products {
  margin: 7px 0;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
}

.cart-products .title {
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0 15px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.total-price-container {
  background-color: white;
}

.total-price-container div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-label {
  font-size: 15px;
  color: #777;
}

.price {
  font-size: 16px;
  font-weight: 500;
}
</style>
