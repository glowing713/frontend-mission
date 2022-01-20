<template>
  <div id="item-info-page">
    <div class="container">
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
        <render-reviews v-bind="reviews" />
      </div>
    </div>
    <like-buy-buttons :price="finalPrice" />
  </div>
</template>

<script>
import SellerInfo from '@/components/ItemInfo/SellerInfo.vue';
import RenderReviews from '@/components/Review/RenderReviews.vue';
import LikeBuyButtons from '@/components/ItemInfo/LikeBuyButtons.vue';
import ImageSlider from '@/components/ItemInfo/ImageSlider.vue';
import ProductInfo from '@/components/ItemInfo/ProductInfo.vue';

import DrMartinSeller from '@/assets/DrMartin/DrMartinSeller';
import DrMartinReviews from '@/assets/DrMartin/DrMartinReviews';
import DrMartinInfo from '@/assets/DrMartin/DrMartinInfo';
import DrMartinDetails from '@/assets/DrMartin/DrMartinDetails'; // 닥터마틴 제품 상세설명(출처: 하이버)

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
      const price = this.product.price * (100 - this.product.discountRate) * 0.01;
      return price.toLocaleString();
    },
  },
};
</script>

<style scoped>
#brandiProductDetailApi img {
  width: 100%;
}

.container {
  padding-bottom: 100px;
}
</style>
