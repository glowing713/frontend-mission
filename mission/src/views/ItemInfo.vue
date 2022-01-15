<template>
  <div id="item-info-page">
    <div class="product-info">
      <!-- thumbnail -->
      <image-slider :imgUrls="product.thumbnails"/>
      <!-- seller-info -->
      <seller-info v-bind="seller" />
      <!-- basic-info -->
      <div class="basic-info">
        <div class="product-name" data-test="product-name"></div>
        <div class="product-price" data-test="product-price"></div>
      </div>
    </div>

    <div class="product-addinfo">
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
    <like-buy-buttons :price="finalPrice" />
  </div>
</template>

<script>
import SellerInfo from '@/components/SellerInfo.vue';
import ProductReview from '@/components/ProductReview.vue';
import LikeBuyButtons from '@/components/LikeBuyButtons.vue';
import ImageSlider from '@/components/ImageSlider.vue';

import DrMartinSeller from '@/assets/DrMartinSeller';
import DrMartinReviews from '@/assets/DrMartinReviews';
import DrMartinInfo from '@/assets/DrMartinInfo';

export default {
  name: 'ItemInfoPage',
  components: {
    SellerInfo,
    ProductReview,
    LikeBuyButtons,
    ImageSlider,
  },
  data() {
    return {
      product: DrMartinInfo,
      seller: DrMartinSeller,
      reviews: DrMartinReviews,
    };
  },
  methods: {},
  computed: {
    finalPrice() {
      return this.product.price * (100 - this.product.discountRate) * 0.01;
    },
  },
};
</script>

<style scoped>
</style>
