<template>
  <div id="item-list-page">
    <base-header />
    <div data-test="item-lists-container" class="item-lists-container"></div>
    <base-nav />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseComponent/BaseHeader.vue';
import BaseNav from '@/components/BaseComponent/BaseNav.vue';

export default {
  name: 'ItemListPage',
  components: { BaseHeader, BaseNav },
};
</script>

<style scoped>
#item-list-page {
  width: 100%;
  height: 100%;
}
</style>
