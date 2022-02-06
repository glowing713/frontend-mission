import { mount } from '@vue/test-utils';
import ItemListItem from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemListItem, {
      propsData: {
        productNum: '1234',
        thumbnail: 'https://simage-kr.uniqlo.com/goods/31/14/21/79/445595_COL_COL00_1000.jpg',
        price: 19900,
        originalPrice: 20000,
        productName: '유니클로 반팔 티셔츠',
        description: 'Keith Haring UT(그래픽T-반팔)A',
        sold: 1382,
      },
    });
  });

  it('renders ItemListItem', () => {
    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  it('renders thumbnail', () => {
    const thumbnail = wrapper.find('[data-test="thumbnail"]');

    expect(thumbnail.exists()).toBe(true);
  });

  it('renders content container', () => {
    const content = wrapper.find('[data-test="content"]');

    expect(content.exists()).toBe(true);
  });

  describe('content price', () => {
    let contentPrice;

    beforeEach(() => {
      contentPrice = wrapper.find('[data-test="price"]');
    });

    it('renders price span', () => {
      expect(contentPrice.exists()).toBe(true);
    });

    it('shows discounted price if item is on sale', async () => {
      await wrapper.setProps({ price: 10000, originalPrice: 15000 });

      expect(contentPrice.text()).toEqual((10000).toLocaleString());
    });

    it('renders discount rate if item is on sale', async () => {
      await wrapper.setProps({ price: 10000, originalPrice: 15000 });
      const discountRate = wrapper.find('[data-test="discount-rate"]');

      expect(discountRate.exists()).toBe(true);
      expect(discountRate.text()).toEqual(`${Math.ceil((10000 / 15000) * 100)}%`);
    });
  });

  it('renders market name', () => {
    const marketName = wrapper.find('[data-test="market-name"]');

    expect(marketName.exists()).toBe(true);
  });

  it('renders item name', () => {
    const itemName = wrapper.find('[data-test="item-name"]');

    expect(itemName.exists()).toBe(true);
  });

  describe('sell count', () => {
    let sellCount;

    beforeEach(async () => {
      await wrapper.setProps({ sold: 1000 });

      sellCount = wrapper.find('[data-test="sell-count"]');
    });

    it('renders sell count', () => {
      expect(sellCount.exists()).toBe(true);
    });

    it('renders formatted number(toLocaleString)', () => {
      expect(sellCount.text()).toEqual(`${(1000).toLocaleString()}개 구매중`);
    });
  });
});
