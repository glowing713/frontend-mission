<template>
  <div class="seller-info" data-test="seller-info">
    <img src="@/assets/logo.svg" alt="seller-img" data-test="seller-img" />
    <p data-test="seller-name">{{ sellerName }}</p>
    <div class="seller-tags" data-test="seller-tags">
      <p v-for="seller in sellerTags" :key="seller.id" data-test="seller-tag">
        {{ seller.tag }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerInfo',
  props: {
    sellerName: String,
    sellerTags: Array,
  },
};
</script>
