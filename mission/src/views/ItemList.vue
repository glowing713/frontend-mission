<template>
  <div id="item-list-page">
    <base-header />
    <div data-test="item-list-container" class="item-list-container">
      <item-list-item
        v-for="item in itemList"
        :key="item.id"
        :thumbnail="item.thumbnail"
        :price="item.price"
        :discountRate="item.discountRate"
        :marketName="item.marketName"
        :productName="item.productName"
        :sold="item.sold"
      />
    </div>
    <base-nav />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseComponent/BaseHeader.vue';
import BaseNav from '@/components/BaseComponent/BaseNav.vue';
import ItemListItem from '@/components/ItemList/Item.vue';

import itemList from '@/assets/ItemList/itemList';

export default {
  name: 'ItemListPage',
  components: { BaseHeader, BaseNav, ItemListItem },
  data() {
    return {
      itemList: [],
    };
  },
  methods: {
    getApiData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Getting item list from server...🏃🏻‍♂️');
          resolve(itemList);
        }, 1000);
      });
    },
  },
  created() {
    this.getApiData().then((apiData) => { this.itemList = apiData; });
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
