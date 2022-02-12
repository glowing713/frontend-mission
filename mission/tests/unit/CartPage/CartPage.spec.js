import { mount } from '@vue/test-utils';
import CartPage from '@/views/CartPage.vue';

describe('CartPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CartPage);
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
});
