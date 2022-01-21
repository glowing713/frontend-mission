import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
  });

  it('renders ItemListPage', () => {
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('renders header', () => {
    const header = wrapper.find('[data-test="header-container"]');

    expect(header.exists()).toBe(true);
  });
});
