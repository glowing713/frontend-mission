<template>
  <div class="cart-page" data-test="cart-page">
    <header data-test="header-container">
      <p data-test="go-back-button" @click="goBack">
        <i :class="['fas', 'fa-chevron-left']"></i>
      </p>
      <p data-test="page-title">장바구니</p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>
