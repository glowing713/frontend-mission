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

.sticky-header {
  height: 27px;
  padding: 15px 25px 15px 25px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 57px;
  background-color: white;
}

.select-all {
  transform: scale(1.3);
}

.select-all ~ label {
  color: #777;
  font-size: 15px;
  margin-left: 7px;
}

.delete-items {
  padding: 2px 10px 2px 10px;
  font-size: 15px;
  font-weight: 600;
}
</style>
