import { mount } from '@vue/test-utils';
import BaseNav from '@/components/BaseComponent/BaseNav.vue';

describe('BaseNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BaseNav);
  });

  it('renders nav container', () => {
    const navContainer = wrapper.find('[data-test="nav-container"]');
    expect(navContainer.exists()).toBe(true);
  });

  it('renders unordered-list element for buttons', () => {
    const ul = wrapper.find('ul');
    expect(ul.exists()).toBe(true);
  });
});
