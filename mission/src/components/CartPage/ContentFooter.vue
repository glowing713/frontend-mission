<template>
  <div class="sticky-footer" data-test="cart-sticky-footer">
    <button class="order-btn" data-test="order-button">
      35,300원 주문하기
    </button>
  </div>
</template>

<script>
export default {
  name: 'ContentFooter',
};
</script>

<style scoped>
.sticky-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  background-color: white;
}

.order-btn {
  display: block;
  width: calc(100% - 30px);
  height: 50px;
  margin: 15px 15px 30px 15px;
  border-radius: 8px;
  background-color: #ff5160;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
</style>
