<template>
  <div class="sticky-under-buttons">
    <button data-test="buy-button"></button>
    <button data-test="like-button">{{ price }}원 구매</button>
  </div>
</template>

<script>
export default {
  name: 'LikeBuyButtons',
  props: {
    price: Number,
  },
};
</script>
