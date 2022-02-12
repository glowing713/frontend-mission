import { mount } from '@vue/test-utils';
import CartPage from '@/views/CartPage.vue';

const $store = {
  state: {
    cartItems: [
      {
        product_no: '',
        name: '',
        image: '',
        price: 0,
        original_price: 0,
        description: '',
      },
    ],
  },
  commit: jest.fn(),
};

describe('CartPage', () => {
  let wrapper;

  beforeEach(() => {
    $store.commit.mockClear();

    wrapper = mount(CartPage, {
      global: {
        mocks: {
          $store,
        },
      },
    });
  });

  it('renders header item', () => {
    const container = wrapper.find('[data-test="header-container"]');

    expect(container.exists()).toBe(true);
  });

  it('renders content container', () => {
    const contents = wrapper.find('[data-test="cart-content-container"]');

    expect(contents.exists()).toBe(true);
  });

  it('renders sticky header', () => {
    const sticky = wrapper.find('[data-test="cart-sticky-header"]');

    expect(sticky.exists()).toBe(true);
  });

  it('renders sticky footer', () => {
    const footer = wrapper.find('[data-test="cart-sticky-footer"]');

    expect(footer.exists()).toBe(true);
  });

  it('renders product container', () => {
    const products = wrapper.find('[data-test="cart-product-container"]');

    expect(products.exists()).toBe(true);
  });
});

describe('store test', () => {
  let wrapper;

  beforeEach(() => {
    $store.commit.mockClear();

    wrapper = mount(CartPage, {
      global: {
        mocks: {
          $store,
        },
      },
    });
  });

  it('commits setCartItems mutation on created hook', () => {
    expect($store.commit).toHaveBeenCalled();
    expect($store.commit).toHaveBeenCalledWith('setCartItems');
  });

  it('commits delCartItem mutation on delete-item event', async () => {
    const itemComponent = wrapper.findComponent({ name: 'CartItem' });
    const productNum = 'test num';
    itemComponent.vm.$emit('deleteItem', productNum);

    expect($store.commit).toHaveBeenCalled();
    expect($store.commit).toHaveBeenLastCalledWith('delCartItem', productNum);
  });
});
