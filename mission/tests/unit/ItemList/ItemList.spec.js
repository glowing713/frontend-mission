import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemListPage);
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
    const itemLists = wrapper.find('[data-test="item-list-container"]');

    expect(itemLists.exists()).toBe(true);
  });
});
