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

  it('contains back button in header', () => {
    const backButton = wrapper.find('[data-test="go-back-button"]');

    expect(backButton.exists()).toBe(true);
  });
});
