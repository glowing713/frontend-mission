import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  let wrapper;
  let productImg;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
    productImg = wrapper.get('[data-test="product-img"]');
  });

  it('renders ItemInfoPage', () => {
    expect(wrapper.get('#item-info-page').exists()).toBe(true);
  });

  it('renders img src', () => {
    expect(productImg.exists()).toBe(true);
  });
});
