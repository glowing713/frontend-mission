import { shallowMount } from '@vue/test-utils';
import SalerInfo from '@/components/SalerInfo.vue';

describe('SalerInfo.vue', () => {
  let wrapper;
  let salerProfileImg;

  beforeEach(() => {
    wrapper = shallowMount(SalerInfo);
    salerProfileImg = wrapper.get('[data-test="saler-img"]');
  });

  it('renders img src(saler profile img)', () => {
    expect(salerProfileImg.exists()).toBe(true);
  });
});
