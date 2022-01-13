import { shallowMount } from '@vue/test-utils';
import SalerInfo from '@/components/SalerInfo.vue';

describe('SalerInfo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SalerInfo);
  });

  it('renders img src(saler profile img)', () => {
    const salerProfileImg = wrapper.get('[data-test="saler-img"]');
    expect(salerProfileImg.exists()).toBe(true);
  });

  it('renders saler name', () => {
    const salerName = wrapper.get('[data-test="saler-name"]');
    expect(salerName.exists()).toBe(true);
  });

  it('renders saler tags', () => {
    const salerTags = wrapper.get('[data-test="saler-tags"]');
    expect(salerTags.exists()).toBe(true);
  });
});
