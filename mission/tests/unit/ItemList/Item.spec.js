import { mount } from '@vue/test-utils';
import ItemListItem from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemListItem);
  });

  it('redners ItemListItem', () => {
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
});
