import { mount, flushPromises } from '@vue/test-utils';
import BaseNav from '@/components/BaseComponent/BaseNav.vue';
import App from '@/App.vue';
import router from '@/router';

describe('BaseNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BaseNav, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders nav container', () => {
    const navContainer = wrapper.find('[data-test="nav-container"]');

    expect(navContainer.exists()).toBe(true);
  });

  it('renders unordered-list element for buttons', () => {
    const ul = wrapper.find('ul');

    expect(ul.exists()).toBe(true);
  });

  it('renders 5 list of buttons', () => {
    const ul = wrapper.find('ul');
    const lists = ul.findAll('li');

    expect(lists).toHaveLength(5);
  });

  it('renders fa icon in each buttons', () => {
    const ul = wrapper.find('ul');
    const lists = ul.findAll('li');

    lists.forEach((li) => expect(li.find('i').exists()).toBe(true));
  });
});

describe('routing test', () => {
  let wrapper;

  beforeEach(async () => {
    router.push('/');
    await router.isReady();

    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await flushPromises();
  });

  it('redirects to cart page when the link is clicked', async () => {
    const cartButton = wrapper.find('[data-test="cart-link"]');
    await cartButton.trigger('click');
    await flushPromises();

    expect(wrapper.find('[data-test="cart-page"]').exists()).toBe(true);
  });
});
