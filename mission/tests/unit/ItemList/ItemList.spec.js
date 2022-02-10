import { mount } from '@vue/test-utils';

import ItemListPage from '@/views/ItemList.vue';
import router from '@/router';

describe('ItemListPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemListPage, {
      global: {
        plugins: [router],
      },
      data() {
        return {
          itemList: [
            {
              productNum: 'abc1234',
              thumbnail: 'https://simage-kr.uniqlo.com/goods/31/14/21/79/445595_COL_COL00_1000.jpg',
              price: 19900,
              originalPrice: 20000,
              productName: '유니클로 반팔 티셔츠',
              description: 'Keith Haring UT(그래픽T-반팔)A',
              sold: 1382,
            },
          ],
        };
      },
    });
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
