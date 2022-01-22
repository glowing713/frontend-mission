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
    it('renders price', () => {
      const contentPrice = wrapper.find('[data-test="price"]');

      expect(contentPrice.exists()).toBe(true);
    });
  });
});
