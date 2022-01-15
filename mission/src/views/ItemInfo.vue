<template>
  <div id="item-info-page">
    <div class="product-info">
      <!-- thumbnail -->
      <image-slider :imgUrls="product.thumbnails" />
      <!-- seller-info -->
      <seller-info v-bind="seller" />
      <!-- basic-info -->
      <product-info v-bind="product" />
    </div>

    <!-- additional info -->
    <div class="product-addinfo">
      <div
        class="product-details"
        data-test="product-details"
        v-html="detailInfo"
      ></div>
      <div class="product-reviews" data-test="product-reviews">
        <render-reviews v-bind="reviews" />
      </div>
    </div>
    <like-buy-buttons :price="finalPrice" />
  </div>
</template>

<script>
import SellerInfo from '@/components/SellerInfo.vue';
import RenderReviews from '@/components/Review/RenderReviews.vue';
import LikeBuyButtons from '@/components/LikeBuyButtons.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import ProductInfo from '@/components/ProductInfo.vue';

import DrMartinSeller from '@/assets/DrMartinSeller';
import DrMartinReviews from '@/assets/DrMartinReviews';
import DrMartinInfo from '@/assets/DrMartinInfo';
import DrMartinDetails from '@/assets/DrMartinDetails'; // 닥터마틴 제품 상세설명(출처: 하이버)

export default {
  name: 'ItemInfoPage',
  components: {
    SellerInfo,
    RenderReviews,
    LikeBuyButtons,
    ImageSlider,
    ProductInfo,
  },
  data() {
    return {
      product: DrMartinInfo,
      detailInfo: DrMartinDetails,
      seller: DrMartinSeller,
      reviews: DrMartinReviews,
    };
  },
  methods: {},
  computed: {
    finalPrice() {
      const price = String(
        this.product.price * (100 - this.product.discountRate) * 0.01,
      );
      return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style scoped>
#brandiProductDetailApi img {
  width: 100%;
}
</style>
