<template>
  <div class="review-item">
    <div class="review-text">
      <p class="review-title" data-test="review-title">{{ title }}</p>
      <div class="review-author" data-test="review-author">
        <p>{{ nickname }}</p>
        <p>{{ generated }}</p>
        <p class="review-likes" data-test="review-likes">좋아요 {{ likes_count }}개</p>
      </div>
      <p class="review-content" data-test="review-content">{{ review }}</p>
    </div>
    <img
      v-if="imageSrc"
      :src="imageSrc"
      alt="review-img"
      class="review-img"
      data-test="review-img"
    />
  </div>
</template>

<script>
export default {
  name: 'ReviewItem',
  props: {
    nickname: String,
    generated: String,
    imageSrc: String,
    title: String,
    review: String,
    likes_count: Number,
    review_no: Number,
  },
};
</script>

<style>
.review-title {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.6px;
  color: #1f1f1f;
  margin: 0;
  text-align: left;
}

.review-item {
  border-top: 1px solid;
  border-color: black;
  display: flex;
  flex-direction: row;
  height: 165px;
}

.review-text {
  flex-grow: 15;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  margin-left: 20px;
}

.review-img {
  flex-grow: 1;
  margin: 35px;
  max-width: 90px;
  max-height: 90px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.review-author {
  margin: 6px 0 15px 0;
  display: flex;
  align-items: center;
}

.review-author p {
  margin: 0;
  margin-right: 9px;
  color: #9e9e9e;
  font-weight: normal;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -.6px;
}

.review-author .review-likes {
  color: #6093fc;
  font-weight: 600;
  font-size: 14px;
}

.review-userMeasure {
  display: flex;
  flex-direction: row;
  font-size: 11px;
  color: #8d8d8d;
}

.review-content {
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

.author-weight {
  margin-left: 5px;
}
</style>
