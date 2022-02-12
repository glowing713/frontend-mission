import { mount } from '@vue/test-utils';
import CartItem from '@/components/CartPage/CartItem.vue';

describe('CartItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CartItem, {
      propsData: {
        productNo: 'qwr1234',
        name: '유니클로 반팔 티셔츠',
        image: 'https://simage-kr.uniqlo.com/goods/31/14/21/79/445595_COL_COL00_1000.jpg',
        price: 19900,
        originalPrice: 20000,
        description: 'Keith Haring UT(그래픽T-반팔)A',
      },
    });
  });

  it('renders cart item container', () => {
    const container = wrapper.find('[data-test="cart-item"]');

    expect(container.exists()).toBe(true);
  });

  it('renders checkbox', () => {
    const checkbox = wrapper.find('input[type="checkbox"]');

    expect(checkbox.exists()).toBe(true);
  });

  it('renders product image', () => {
    const image = wrapper.find('[data-test="product-image"]');

    expect(image.exists()).toBe(true);
  });

  it('renders product name', () => {
    const name = wrapper.find('[data-test="product-name"]');

    expect(name.exists()).toBe(true);
  });

  it('renders product description', () => {
    const description = wrapper.find('[data-test="product-description"]');

    expect(description.exists()).toBe(true);
  });

  it('renders product price', () => {
    const price = wrapper.find('[data-test="product-price"]');

    expect(price.exists()).toBe(true);
  });

  it('should not render original price if not on sale', async () => {
    await wrapper.setProps({ price: 10000, originalPrice: 10000 });

    expect(wrapper.find('[data-test="original-price"]').exists()).toBe(false);
  });

  it('renders delete button', () => {
    const deleteBtn = wrapper.find('[data-test="delete-button"]');

    expect(deleteBtn.exists()).toBe(true);
  });

  it('emits deleteItem event', async () => {
    const deleteBtn = wrapper.find('[data-test="delete-button"]');
    await deleteBtn.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('deleteItem');
  });

  it('emits deleteItem event with product_no', async () => {
    const productNo = 'test num';
    await wrapper.setProps({ productNo });
    const deleteBtn = wrapper.find('[data-test="delete-button"]');
    await deleteBtn.trigger('click');
    const emitParameter = wrapper.emitted('deleteItem')[0][0];

    expect(emitParameter).toEqual(productNo);
  });
});
