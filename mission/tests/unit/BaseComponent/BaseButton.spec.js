import { shallowMount } from '@vue/test-utils';
import BaseButton from '@/components/BaseComponent/BaseButton.vue';

describe('BaseButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseButton);
  });

  it('emit check: func prop이 rotate일 때는 rotate trigger', async () => {
    await wrapper.setProps({ func: 'rotate' });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('rotate');
  });

  it('emit check: func prop이 alert일 때는 alert trigger하고, 누른 횟수 전달', async () => {
    await wrapper.setProps({ func: 'alert' });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('alert');
  });
});
