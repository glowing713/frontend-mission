<template>
<div id='item-info-page'>
  <img src="@/assets/logo.png" alt="product-img" data-test="product-img">
  <saler-info :salerName="this.salerName" :salerTags="this.salerTags"/>
</div>
</template>

<script>
import SalerInfo from '@/components/SalerInfo.vue';
import DrMartinTags from '@/assets/DrMartinTags';

export default {
  name: 'ItemInfoPage',
  components: { SalerInfo },
  data() {
    return {
      salerName: 'Sean',
      salerTags: DrMartinTags,
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
