<template>
  <div class="thumbnail" data-test="product-img">
    <img :src="imgUrls[0]" alt="product-img">
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    imgUrls: Array,
  },
  data() {
    return {
      currentIdx: 0,
    };
  },
};
</script>

<style>
.thumbnail img {
  width: 500px;
  height: 500px;
}
</style>
