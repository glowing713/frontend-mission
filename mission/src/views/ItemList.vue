<template>
  <div id="item-list-page">
    <base-header />
    <div data-test="item-list-container" class="item-list-container">
      <item-list-item
        v-for="item in itemList"
        :key="item.product_no"
        :productNum="item.product_no"
        :thumbnail="item.image"
        :price="item.price"
        :originalPrice="item.original_price"
        :productName="item.name"
        :description="item.description"
        :sold="1247"
      />
    </div>
    <base-nav />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseComponent/BaseHeader.vue';
import BaseNav from '@/components/BaseComponent/BaseNav.vue';
import ItemListItem from '@/components/ItemList/Item.vue';

import ApiRepository from '@/repositories/ApiRepository';

export default {
  name: 'ItemListPage',
  components: { BaseHeader, BaseNav, ItemListItem },
  data() {
    return {
      itemList: [],
    };
  },
  created() {
    this.setItemList();
  },
  methods: {
    async setItemList() {
      const apiClient = new ApiRepository();
      const response = await apiClient.getItems();
      this.itemList = response.data.items;
    },
  },
};
</script>

<style scoped>
#item-list-page {
  width: 100%;
  height: 100%;
}

.item-list-container {
  display: grid;
  gap: 20px 12px;
  padding: 16px 12px 76px 12px;
  grid-template-columns: repeat(auto-fill, minmax(169px, 1fr));
}

@media screen and (max-width: 767px) {
  .item-list-container {
    gap: 5vw 3vw;
    padding: 4vw 3vw 71px 3vw;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
