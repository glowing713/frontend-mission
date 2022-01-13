<template>
  <div class="product-review">
      <div class="review-contents" data-test="review-contents"></div>
  </div>
</template>

<script>
export default {
  name: 'ProductReview',
  props: {
    nickname: String,
    info: Array,
    review: String,
  },
};
</script>
