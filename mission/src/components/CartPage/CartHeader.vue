<template>
  <header class="header-container" data-test="header-container">
      <p class="back-button" data-test="go-back-button" @click="goBack">
        <i :class="['fas', 'fa-chevron-left']"></i>
      </p>
      <p class="page-title" data-test="page-title">장바구니</p>
      <p></p>
    </header>
</template>

<script>
export default {
  name: 'CartHeader',
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
p {
    margin: 0;
    display: inline-block;
    flex-grow: 1;
    font-size: 20px;
}

.header-container {
    width: auto;
    height: 27px;
    padding: 15px 25px 15px 25px;
    display: flex;
    justify-content: center;
    align-content: space-around;
}

.back-button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #9e9e9e;
}

.page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}
</style>
