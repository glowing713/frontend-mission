import { mount } from '@vue/test-utils';
import ItemListItem from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemListItem);
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
      await wrapper.setProps({ price: 10000, discountRate: 10 });

      expect(contentPrice.text()).toEqual((10000 * 0.9).toLocaleString());
    });

    it('renders discount rate if item is on sale', async () => {
      await wrapper.setProps({ price: 10000, discountRate: 10 });
      const discountRate = wrapper.find('[data-test="discount-rate"]');

      expect(discountRate.exists()).toBe(true);
      expect(discountRate.text()).toEqual(String(10)); // String 타입이라는 것을 명시하기 위해 형변환을 시킴
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

    it('renders formatted number(toLocaleString)', async () => {
      expect(sellCount.text()).toEqual(`${(1000).toLocaleString()}개 구매중`);
    });
  });
});
