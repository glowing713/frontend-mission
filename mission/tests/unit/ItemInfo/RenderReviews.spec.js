import { mount } from '@vue/test-utils';
import RenderReviews from '@/components/Review/RenderReviews.vue';

describe('RenderReviews.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RenderReviews, {
      propsData: {
        photoReviews: [
          {
            nickname: 'externship',
            generated: '2022.01.09',
            userMeasure: {
              height: 175,
              weight: 70,
            },
            imageSrc: 'https://sunhwan-ably-externship-s3-bucket.s3.ap-northeast-2.amazonaws.com/review01.jpeg',
            text: '너무 이뻐요!!',
          },
        ],
        textReviews: [
          {
            nickname: 'vueisfun',
            generated: '2022.01.14',
            userMeasure: {
              height: 180,
              weight: 78,
            },
            text: '반 사이즈 업으로 사세요~!',
          },
        ],
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
    const reviewInfo = wrapper.find('[data-test="review-usermeasure"]');
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
