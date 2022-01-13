import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
  });

  it('renders ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('renders img src', () => {
    const productImg = wrapper.find('[data-test="product-img"]');
    expect(productImg.exists()).toBe(true);
  });

  it('renders product seller info', () => {
    const productSellerInfo = wrapper.find('[data-test="seller-info"]');
    expect(productSellerInfo.exists()).toBe(true);
  });

  it('renders product name', () => {
    const productName = wrapper.find('[data-test="product-name"]');
    expect(productName.exists()).toBe(true);
  });

  it('renders product price', () => {
    const productPrice = wrapper.find('[data-test="product-price"]');
    expect(productPrice.exists()).toBe(true);
  });

  it('renders product details', () => {
    const productDetails = wrapper.find('[data-test="product-details"]');
    expect(productDetails.exists()).toBe(true);
  });

  it('renders product reviews', () => {
    const productReviews = wrapper.find('[data-test="product-reviews"]');
    expect(productReviews.exists()).toBe(true);
  });
});
