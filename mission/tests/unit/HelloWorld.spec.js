import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('Should render a input tag and a button', () => {
    const wrapper = shallowMount(HelloWorld, {});
    const input = wrapper.find('input');
    const button = wrapper.find('button');
    expect(input.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });
});
