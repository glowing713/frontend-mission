<template>
<div id='item-info-page'>
  <img src="@/assets/logo.png" alt="product-img" data-test="product-img">
  <seller-info :sellerName="this.sellerName" :sellerTags="this.sellerTags"/>
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
