import { mount } from '@vue/test-utils';
import CartItem from '@/components/CartPage/CartItem.vue';

describe('CartItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CartItem, {
      propsData: {
        productNo: 'qwr1234',
        name: '유니클로 반팔 티셔츠',
        image: 'https://simage-kr.uniqlo.com/goods/31/14/21/79/445595_COL_COL00_1000.jpg',
        price: 19900,
        originalPrice: 20000,
        description: 'Keith Haring UT(그래픽T-반팔)A',
      },
    });
  });

  it('renders cart item container', () => {
    const container = wrapper.find('[data-test="cart-item"]');

    expect(container.exists()).toBe(true);
  });

  it('renders checkbox', () => {
    const checkbox = wrapper.find('input[type="checkbox"]');

    expect(checkbox.exists()).toBe(true);
  });

  it('renders product image', () => {
    const image = wrapper.find('[data-test="product-image"]');

    expect(image.exists()).toBe(true);
  });
});
