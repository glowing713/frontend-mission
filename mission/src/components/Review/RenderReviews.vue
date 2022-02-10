<template>
  <div class="product-reviews" data-test="product-reviews">
    <div class="review-contents" data-test="review-contents">
      <div class="photo-reviews">
        <p class="pr-title">포토리뷰 <span>{{reviews.length}}</span></p>
        <review-item
          v-for="review in reviews"
          :key="review.review_no"
          :nickname="review.writer"
          :generated="review.created"
          :imageSrc="review.img"
          :title="review.title"
          :review="review.content"
          :likes_count="review.likes_count"
          :review_no="review.review_no"
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
    reviews: Array,
  },
};
</script>

<style>
.pr-title {
  margin-left: 20px;
  font-size: 19px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: flex-start;
}

.pr-title span {
  margin-left: 5px;
  color: #8D8D8D;
}
</style>
