import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  let wrapper;
  let productImg;
  let productSellerInfo;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
    productImg = wrapper.get('[data-test="product-img"]');
    productSellerInfo = wrapper.get('[data-test="seller-info"]');
  });

  it('renders ItemInfoPage', () => {
    expect(wrapper.get('#item-info-page').exists()).toBe(true);
  });

  it('renders img src', () => {
    expect(productImg.exists()).toBe(true);
  });

  it('renders product seller info', () => {
    expect(productSellerInfo.exists()).toBe(true);
  });
});
