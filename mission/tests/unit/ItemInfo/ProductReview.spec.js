import { shallowMount } from '@vue/test-utils';
import ProductReview from '@/components/ProductReview.vue';

describe('ProductReview.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductReview, {
      propsData: {
        nickname: 'foobar',
        info: {
          height: 178,
          weight: 75,
        },
        imageSrc: 'https://sunhwan-ably-externship-s3-bucket.s3.ap-northeast-2.amazonaws.com/review01.jpeg',
        text: '다음에도 이용할게요!',
      },
    });
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

  it('renders review content', () => {
    const reviewContent = wrapper.find('[data-test="review-content"]');
    expect(reviewContent.exists()).toBe(true);
  });

  it('renders review image', () => {
    const reviewImage = wrapper.find('[data-test="review-img"]');
    expect(reviewImage.exists()).toBe(true);
  });
});
