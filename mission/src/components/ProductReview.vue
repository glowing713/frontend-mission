<template>
  <div class="product-review">
      <div class="review-contents" data-test="review-contents">
          <p class="review-author" data-test="review-author"></p>
      </div>
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
