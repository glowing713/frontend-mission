<template>
  <div class="order-container">
    <p class="title">주문하기</p>
    <div class="order-item">
      {{ getProductName }} 포함 {{ getOrderCount }}건 {{ getTotalPrice }}원
    </div>
    <div class="order-info">
      <p for="order-name">주문자명</p>
      <input type="text" name="order-name" />
      <p for="phone-number">전화번호</p>
      <input type="text" name="phone-number" />
      <p for="order-address">수령주소</p>
      <input type="text" name="order-address" />
      <p for="order-payments">결제 방법</p>
      <div class="payments">
        <button>신용카드</button>
        <button>계좌이체</button>
      </div>
    </div>
    <div class="order-btn">
      <button>주문하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartOrder',
  computed: {
    getProductName() {
      return this.$route.params.productName;
    },
    getOrderCount() {
      return this.$route.params.orderCount;
    },
    getTotalPrice() {
      return this.$route.params.totalPrice;
    },
  },
};
</script>

<style scoped>
.order-container {
  padding: 30px;
}

.order-container .title {
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 600;
}

.order-container .order-item {
  text-align: left;
}

.order-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.order-info input {
  width: 60%;
}

.order-info .payments {
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

.payments button {
  border-radius: 5px;
}

.order-btn {
  margin-top: 50px;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.order-btn button {
  grid-column-start: 3;
  grid-column-end: 4;
  border-radius: 5px;
}
</style>
