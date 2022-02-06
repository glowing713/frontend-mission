import { mount } from '@vue/test-utils';
import RenderReviews from '@/components/Review/RenderReviews.vue';

describe('RenderReviews.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RenderReviews, {
      propsData: {
        reviews: [
          {
            writer: 'gl****',
            created: '2021.12.04',
            img: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/example.jpg',
            title: '만족해요',
            content: '핏이 아주 잘 맞습니다. 대만족!',
            likes_count: 7,
            review_no: 1,
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

  it('renders review title', () => {
    const reviewTitle = wrapper.find('[data-test="review-title"]');
    expect(reviewTitle.exists()).toBe(true);
  });

  it('renders review likes', () => {
    const reviewLikes = wrapper.find('[data-test="review-likes"]');
    expect(reviewLikes.exists()).toBe(true);
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
