<template>
  <div class="product-review">
    <div class="review-contents" data-test="review-contents">
      <p class="review-author" data-test="review-author"></p>
      <div class="review-info" data-test="review-info">
        <p class="author-height" v-if="info">{{ info.height }}</p>
        <p class="author-weight" v-if="info">{{ info.weight }}</p>
      </div>
      <p class="review-content" data-test="review-content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductReview',
  props: {
    nickname: String,
    info: {
      height: Number,
      weight: Number,
    },
    review: String,
  },
};
</script>
