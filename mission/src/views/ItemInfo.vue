<template>
<div id='item-info-page'>
  <img src="@/assets/logo.png" alt="product-img" data-test="product-img">
  <saler-info/>
</div>
</template>

<script>
import SalerInfo from '@/components/SalerInfo.vue';

export default {
  name: 'ItemInfoPage',
  components: { SalerInfo },
  data() {
    return {

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
