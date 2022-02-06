<template>
  <router-link :to="`/item/${productNum}`" data-test="to-item-info">
    <div class="item-list-item">
      <div data-test="thumbnail" class="thumbnail-container">
        <img :src="thumbnail" :alt="description" />
      </div>
      <div data-test="content" class="content-container">
        <div data-test="price-info" class="price-info">
          <p v-if="isOnSale" data-test="discount-rate" class="discount-rate">
            {{ discountRate }}%
          </p>
          <p data-test="price" class="price">{{ finalPrice }}</p>
        </div>
        <div class="market-info">
          <p data-test="market-name" class="market-name">{{ productName }}</p>
        </div>
        <div class="item-info">
          <p data-test="item-name" class="item-name">{{ description }}</p>
        </div>
        <div class="sell-info">
          <p data-test="sell-count" class="sell-count">
            {{ soldCount }}개 구매중
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    productNum: { type: String, default: '0' },
    thumbnail: { type: String, default: '' },
    price: { type: Number, default: 0 },
    originalPrice: { type: Number, default: 0 },
    productName: { type: String, default: '' },
    description: { type: String, default: '' },
    sold: { type: Number, default: 0 },
  },
  computed: {
    finalPrice() {
      return this.price.toLocaleString();
    },
    isOnSale() {
      return !(this.price === this.originalPrice);
    },
    soldCount() {
      return this.sold.toLocaleString();
    },
    discountRate() {
      if (this.price === this.originalPrice) {
        return 0;
      }
      return Math.ceil((this.price / this.originalPrice) * 100);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.item-list-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.item-list-item p {
  margin: 0;
}

.item-list-item .thumbnail-container {
  padding-bottom: 105%;
  position: relative;
}

.thumbnail-container img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid transparent;
  border-radius: 6px;
}

.item-list-item .content-container {
  padding: 12px 4px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.price-info {
  display: flex;
  letter-spacing: -0.6px;
}

.price-info .discount-rate {
  margin-right: 6px;
  font-weight: 600;
  color: #ff5160;
}

.price-info .price {
  font-weight: 600;
  color: #1f1f1f;
}

.market-info {
  margin-top: 8px;
  display: flex;
}

.market-info .market-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 600;
  color: #777;
  letter-spacing: -0.2px;
}

.item-info {
  margin-top: 4px;
}

.item-info .item-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
  font-size: 12px;
  color: #777;
  text-align: left;
}

.sell-info {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.sell-info .sell-count {
  word-break: break-all;
  line-height: 19px;
  font-weight: 400;
  font-size: 12px;
  color: #9e9e9e;
  text-align: left;
}

@media screen and (max-width: 767px) {
  .item-list-item {
    min-height: 80vw;
  }

  .item-list-item .content-container {
    padding: 3.2vw 1vw 0;
  }

  .discount-rate {
    margin-right: 1.6vw;
    font-size: 4.8vw;
  }

  .price {
    font-size: 4.8vw;
  }

  .market-info {
    margin-top: 2.2vw;
  }

  .market-info .market-name {
    font-size: 3.2vw;
  }

  .item-info {
    margin-top: 1.1vw;
  }

  .item-info .item-name {
    font-size: 3.2vw;
  }

  .sell-info {
    margin-top: 2.7vw;
  }

  .sell-info .sell-count {
    line-height: 5.06667vw;
    font-size: 3.2vw;
  }
}
</style>
