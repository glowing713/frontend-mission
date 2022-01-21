import { mount } from '@vue/test-utils';
import BaseHeader from '@/components/BaseComponent/BaseHeader.vue';

describe('BaseHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BaseHeader);
  });

  it('renders header', () => {
    const header = wrapper.find('[data-test="header-container"]');

    expect(header.exists()).toBe(true);
  });

  it('contains malls name', () => {
    const mallName = wrapper.find('[data-test="mall-name"]');

    expect(mallName.exists()).toBe(true);
  });
});
