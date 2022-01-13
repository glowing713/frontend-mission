<template>
  <div id="item-info-page">
    <img src="@/assets/logo.png" alt="product-img" data-test="product-img" />
    <seller-info :sellerName="this.sellerName" :sellerTags="this.sellerTags" />
    <div class="product-name" data-test="product-name"></div>
    <div class="product-price" data-test="product-price"></div>
  </div>
</template>

<script>
import SellerInfo from '@/components/SellerInfo.vue';
import DrMartinTags from '@/assets/DrMartinTags';

export default {
  name: 'ItemInfoPage',
  components: { SellerInfo },
  data() {
    return {
      sellerName: 'Sean',
      sellerTags: DrMartinTags,
    };
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style scoped>

</style>
