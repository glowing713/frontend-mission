import { shallowMount } from '@vue/test-utils';
import ProductReview from '@/components/ProductReview.vue';

describe('ProductReview.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductReview);
  });

  it('renders review contents(texts)', () => {
    const reviewContent = wrapper.find('[data-test="review-contents"]');
    expect(reviewContent.exists()).toBe(true);
  });

  it('renders review author', () => {
    const reviewAuthor = wrapper.find('[data-test="review-author"]');
    expect(reviewAuthor.exists()).toBe(true);
  });

  it('renders review author info', () => {
    const reviewInfo = wrapper.find('[data-test="review-info"]');
    expect(reviewInfo.exists()).toBe(true);
  });
});
