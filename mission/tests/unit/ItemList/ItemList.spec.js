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

  it('renders navigation bar', () => {
    const nav = wrapper.find('[data-test="nav-container"]');

    expect(nav.exists()).toBe(true);
  });

  it('renders item lists container', () => {
    const itemLists = wrapper.find('[data-test="item-lists-container"]');

    expect(itemLists.exists()).toBe(true);
  });
});
