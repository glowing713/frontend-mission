import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  let wrapper;
  let productImg;
  let productSalerInfo;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
    productImg = wrapper.get('[data-test="product-img"]');
    productSalerInfo = wrapper.get('[data-test="saler-info"]');
  });

  it('renders ItemInfoPage', () => {
    expect(wrapper.get('#item-info-page').exists()).toBe(true);
  });

  it('renders img src', () => {
    expect(productImg.exists()).toBe(true);
  });

  it('renders product saler div', () => {
    expect(productSalerInfo.exists()).toBe(true);
  });
});
