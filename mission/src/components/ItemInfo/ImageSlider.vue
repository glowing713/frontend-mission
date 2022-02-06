<template>
  <div class="thumbnail" data-test="product-img">
    <img :src="imgUrl" :alt="alt">
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    imgUrl: String,
    alt: String,
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
