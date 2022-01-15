<template>
  <div class="seller-info" data-test="seller-info">
    <div class="seller-logo-name">
      <img :src="logoSrc" alt="seller-img" data-test="seller-img"/>
      <p data-test="seller-name">{{ sellerName }}</p>
    </div>
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
    logoSrc: String,
    sellerName: String,
    sellerTags: Array,
  },
};
</script>

<style>
.seller-info {
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

.seller-logo-name {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.seller-logo-name img {
  border: 1px solid;
  border-color: #e5e5e5;
  border-radius: 20px;
  width: 35px;
  height: 35px;
  margin-left: 6px;
}

.seller-logo-name p {
  margin-left: 8px;
  color: grey;
  font-size: 18px;
}

.seller-tags {
  width: 100%;
  height: 100%;
  color: grey;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.seller-tags p {
  margin: 0 0 0 10px;
}
</style>
