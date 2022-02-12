import { mount } from '@vue/test-utils';
import ContentHeader from '@/components/CartPage/ContentHeader.vue';

describe('ContentHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ContentHeader);
  });

  it('contains select all checkbox in sticky header', () => {
    const sticky = wrapper.find('[data-test="cart-sticky-header"]');
    const checkbox = sticky.find('[data-test="select-all"]');

    expect(checkbox.exists()).toBe(true);
  });

  it('contains delete-from-cart button in sticky header', () => {
    const sticky = wrapper.find('[data-test="cart-sticky-header"]');
    const delButton = sticky.find('[data-test="delete-items"]');

    expect(delButton.exists()).toBe(true);
  });
});
