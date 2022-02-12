<template>
  <div class="cart-page" data-test="cart-page">
    <cart-header />
    <div class="cart-contents" data-test="cart-content-container">
      <content-header />
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
};
</script>

<style>
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
</style>
