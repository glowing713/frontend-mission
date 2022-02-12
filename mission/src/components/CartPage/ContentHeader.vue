<template>
  <div class="sticky-header" data-test="cart-sticky-header">
    <p>
      <input type="checkbox" class="select-all" data-test="select-all" />
      <label for="select-all">전체선택 (2/2)</label>
    </p>
    <p>
      <button class="delete-items" data-test="delete-items">선택삭제</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContentHeader',
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
