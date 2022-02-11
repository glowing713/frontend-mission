import { mount } from '@vue/test-utils';
import CartPage from '@/views/CartPage.vue';

const mockGetItems = jest.fn();
const mockGetItemInfo = jest.fn();
jest.mock('@/repositories/ApiRepository', () => jest.fn().mockImplementation(() => ({
  getItems: mockGetItems,
  getItemInfo: mockGetItemInfo,
})));

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

describe('Routing test', () => {
  it('redirects to previous page when back button is clicked', async () => {
    const mockBack = jest.fn();
    const wrapper = mount(CartPage, {
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
