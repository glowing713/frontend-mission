<template>
  <div class="review-item">
    <div class="review-text">
      <div class="author-userMeasure">
        <p class="review-author" data-test="review-author">
          {{ blindName }}<span>{{ generated }}</span>
        </p>
        <div class="review-userMeasure" data-test="review-userMeasure">
          <p class="author-height">{{ userMeasure.height }}cm</p>
          <p class="author-weight">{{ userMeasure.weight }}kg</p>
        </div>
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
    userMeasure: Object,
    imageSrc: String,
    review: String,
  },
  computed: {
    blindName() {
      const blindName = `${this.nickname.slice(0, 2)}${'*'.repeat(
        this.nickname.slice(2).length,
      )}`;
      return blindName;
    },
  },
};
</script>

<style>
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
  margin: 0;
  font-size: 19px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.review-author span {
  margin-left: 17px;
  color: #8d8d8d;
  font-weight: normal;
  font-size: 15px;
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
