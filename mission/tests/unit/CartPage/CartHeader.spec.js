import { mount } from '@vue/test-utils';
import CartHeader from '@/components/CartPage/CartHeader.vue';

describe('CartHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CartHeader);
  });

  it('contains back button in header', () => {
    const backButton = wrapper.find('[data-test="go-back-button"]');

    expect(backButton.exists()).toBe(true);
  });

  it('contains page title in header', () => {
    const pageTitle = wrapper.find('[data-test="page-title"]');

    expect(pageTitle.exists()).toBe(true);
  });
});

describe('Routing test', () => {
  it('redirects to previous page when back button is clicked', async () => {
    const mockBack = jest.fn();
    const wrapper = mount(CartHeader, {
      global: {
        mocks: {
          $router: {
            back: mockBack,
          },
        },
      },
    });

    await wrapper.find('[data-test="go-back-button"]').trigger('click');

    expect(mockBack).toHaveBeenCalled();
  });
});
