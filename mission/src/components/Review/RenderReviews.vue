<template>
  <div class="product-reviews" data-test="product-reviews">
    <div class="review-contents" data-test="review-contents">
      <div class="photo-reviews">
        <p class="pr-title">포토리뷰 <span>{{photoReviews.length}}</span></p>
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
        <p class="tr-title">텍스트리뷰 <span>{{textReviews.length}}</span></p>
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

<style>
.pr-title, .tr-title {
  margin-left: 20px;
  font-size: 19px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: flex-start;
}

.pr-title span, .tr-title span {
  margin-left: 5px;
  color: #8D8D8D;
}
</style>
