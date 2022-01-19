import { shallowMount } from '@vue/test-utils';
import SellerInfo from '@/components/SellerInfo.vue';

describe('SellerInfo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SellerInfo);
  });

  it('renders img src(seller profile img)', () => {
    const sellerProfileImg = wrapper.get('[data-test="seller-img"]');
    expect(sellerProfileImg.exists()).toBe(true);
  });

  it('renders seller name', () => {
    const sellerName = wrapper.get('[data-test="seller-name"]');
    expect(sellerName.exists()).toBe(true);
  });

  it('renders seller tags', () => {
    const sellerTags = wrapper.get('[data-test="seller-tags"]');
    expect(sellerTags.exists()).toBe(true);
  });
});
