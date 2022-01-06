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

  it('2번 요구사항, input에서 입력한 값은 실시간으로 바로 밑에 표시가 된다', async () => {
    const wrapper = shallowMount(HelloWorld);
    const textInput = wrapper.find('input[class="str_input"]');

    expect(textInput.exists()).toBe(true);

    const textPrint = wrapper.find('p[class="str_print"]');

    expect(textPrint.exists()).toBe(true);

    await textInput.setValue('hello');

    expect(textPrint.text()).toBe(`입력된 문자열: ${'hello'}`);
  });
});
