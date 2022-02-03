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
