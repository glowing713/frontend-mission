<template>
  <div id="item-info-page">
    <img src="@/assets/logo.png" alt="product-img" data-test="product-img" />
    <seller-info v-bind="this.seller" />
    <div class="product-name" data-test="product-name"></div>
    <div class="product-price" data-test="product-price"></div>
    <div class="product-details" data-test="product-details"></div>
    <div class="product-reviews" data-test="product-reviews">
      <product-review
        v-for="(review, idx) in reviews"
        :key="idx"
        :nickname="review.nickname"
        :info="review.info"
        :imageSrc="review.imageSrc"
        :review="review.text"
      />
    </div>
  </div>
</template>

<script>
import SellerInfo from '@/components/SellerInfo.vue';
import ProductReview from '@/components/ProductReview.vue';

import DrMartinSeller from '@/assets/DrMartinSeller';
import DrMartinReviews from '@/assets/DrMartinReviews';

export default {
  name: 'ItemInfoPage',
  components: { SellerInfo, ProductReview },
  data() {
    return {
      seller: DrMartinSeller,
      reviews: DrMartinReviews,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>
