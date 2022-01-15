<template>
  <div class="review-item">
    <p class="review-author" data-test="review-author">{{ blindName }}</p>
    <div class="review-info" data-test="review-info">
      <p class="author-height">{{ info.height }}cm</p>
      <p class="author-weight">{{ info.weight }}kg</p>
    </div>
    <p class="review-content" data-test="review-content">{{ review }}</p>
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
    info: Object,
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
