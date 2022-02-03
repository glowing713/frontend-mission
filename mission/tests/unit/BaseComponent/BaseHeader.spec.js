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

  it('contains notice button', () => {
    const noticeLink = wrapper.find('[data-test="notice-link"]');

    expect(noticeLink.exists()).toBe(true);
  });

  describe('Mall name anchor', () => {
    it('anchors to main page(/) on click', () => {
      const mallName = wrapper.find('[data-test="mall-name"]');
      const anchor = mallName.find('a');
      expect(anchor.attributes('href')).toBe('/');
    });
  });
});
