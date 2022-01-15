<template>
  <div class="product-review">
    <div class="review-contents" data-test="review-contents">
      <div class="photo-reviews">
        <review-item
          v-for="(review, idx) in photoReviews"
          :key="idx"
          :nickname="review.nickname"
          :generated="review.generated"
          :info="review.info"
          :imageSrc="review.imageSrc"
          :review="review.text"
        />
      </div>
      <div class="text-reviews">
        <review-item
          v-for="(review, idx) in textReviews"
          :key="idx"
          :nickname="review.nickname"
          :generated="review.generated"
          :info="review.info"
          :review="review.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewItem from '@/components/Review/ReviewItem.vue';

export default {
  name: 'RenderReviews',
  components: { ReviewItem },
  props: {
    photoReviews: Array,
    textReviews: Array,
  },
};
</script>
