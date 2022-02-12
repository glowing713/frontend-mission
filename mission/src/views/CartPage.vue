<template>
  <div class="cart-page" data-test="cart-page">
    <cart-header />
    <div class="cart-contents" data-test="cart-content-container">
      <div class="sticky-header" data-test="cart-sticky-header">
        <p>
          <input type="checkbox" class="select-all" data-test="select-all" />
          <label for="select-all">전체선택 (2/2)</label>
        </p>
        <p>
          <button class="delete-items" data-test="delete-items">
            선택삭제
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CartHeader from '@/components/CartPage/CartHeader.vue';

export default {
  name: 'CartPage',
  components: { CartHeader },
};
</script>

<style scoped>
.cart-page {
  width: 100%;
  height: 100%;
}
</style>
