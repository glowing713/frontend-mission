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
});
