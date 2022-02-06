<template>
  <div id="item-info-page">
    <div class="container">
      <div class="product-info">
        <!-- thumbnail -->
        <image-slider :imgUrl="product.image" :alt="product.name" />
        <!-- seller-info -->
        <seller-info v-bind="product.seller" />
        <!-- basic-info -->
        <product-info
          :name="product.name"
          :price="product.price"
          :original_price="product.original_price"
        />
      </div>

      <!-- additional info -->
      <div class="product-addinfo">
        <div
          class="product-details"
          data-test="product-details"
          v-html="product.description"
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

import MallRepository from '@/repositories/MallRepository';
import DrMartinSeller from '@/assets/DrMartin/DrMartinSeller';
import DrMartinReviews from '@/assets/DrMartin/DrMartinReviews';
// import DrMartinInfo from '@/assets/DrMartin/DrMartinInfo';
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
      product: {
        description: '',
        image: '',
        name: '',
        original_price: 0,
        price: 0,
        product_no: '',
        reviews: [
          {
            content: '',
            created: '',
            img: '',
            likes_count: 0,
            review_no: 0,
            title: '',
            writer: '',
          },
        ],
        seller: {
          hash_tags: [],
          name: '',
          profile_image: '',
          seller_no: 0,
        },
      },
      detailInfo: DrMartinDetails,
      seller: DrMartinSeller,
      reviews: DrMartinReviews,
    };
  },
  created() {
    this.setItemInfo();
  },
  methods: {
    async setItemInfo() {
      const {
        data: { item },
      } = await MallRepository.getItemInfo(this.$route.params.id);
      console.log(item);
      this.product = item;
    },
  },
  computed: {
    finalPrice() {
      return this.product.price.toLocaleString();
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
