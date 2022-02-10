<template>
  <div class="seller-info" data-test="seller-info">
    <div class="seller-logo-name">
      <img :src="profile_image" :alt="name" data-test="seller-img"/>
      <p data-test="seller-name">{{ name }}</p>
    </div>
    <div class="seller-tags" data-test="seller-tags">
      <p v-for="tag in hash_tags" :key="tag" data-test="seller-tag">
        #{{ tag }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerInfo',
  props: {
    profile_image: { type: String, default: '' },
    name: { type: String, default: '' },
    hash_tags: { type: Array, default: () => [] },
    seller_no: { type: Number, default: 0 },
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
  margin-left: 20px;
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
  font-size: 17px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.seller-tags p {
  margin: 0 0 0 6px;
}
</style>
