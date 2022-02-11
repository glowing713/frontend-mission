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
});
