import { mount } from '@vue/test-utils';
import CartItem from '@/components/CartPage/CartItem.vue';

describe('CartItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CartItem, {
      propData() {
        return {
          product_no: '',
          name: '',
          image: '',
          price: 0,
          original_price: 0,
          description: '',
        };
      },
    });
  });

  it('renders cart item container', () => {
    const container = wrapper.find('[data-test="cart-item"]');

    expect(container.exists()).toBe(true);
  });
});
