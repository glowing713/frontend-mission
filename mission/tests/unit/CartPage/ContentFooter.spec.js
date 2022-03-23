import { mount } from '@vue/test-utils';
import ContentFooter from '@/components/CartPage/ContentFooter.vue';

describe('ContentFooter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ContentFooter);
  });

  it('renders order button', () => {
    const orderBtn = wrapper.find('[data-test="order-button"]');

    expect(orderBtn.exists()).toBe(true);
  });
});
