import { mount } from '@vue/test-utils';
import BaseButton from '@/components/BaseButton.vue';

describe('BaseButton.vue', () => {
  it('emit check: func prop이 rotate일 때는 rotate trigger', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        func: 'rotate',
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('rotate');
  });
});
