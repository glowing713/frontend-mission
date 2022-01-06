import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('1번 요구사항, 문자열 입력란과 버튼이 있어야 한다', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.find('input');
    const button = wrapper.find('button');
    expect(input.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });
});
