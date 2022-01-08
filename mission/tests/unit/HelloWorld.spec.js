import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('1번 요구사항, 문자열 입력란과 버튼이 있어야 한다', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findComponent({ name: 'base-input' });
    const button = wrapper.find('button');
    expect(input.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });

  it('2번 요구사항, input에서 입력한 값은 실시간으로 바로 밑에 표시가 된다', async () => {
    const wrapper = shallowMount(HelloWorld);
    const textInput = wrapper.findComponent({ name: 'base-input' });

    expect(textInput.exists()).toBe(true);

    const textPrint = wrapper.find('p[class="str_print"]');

    expect(textPrint.exists()).toBe(true);

    await textInput.setValue('hello');
    expect(textPrint.text()).toBe('hello');

    await textInput.setValue('hellooo');
    expect(textPrint.text()).toBe('hellooo');

    await textInput.setValue('123123112');
    expect(textPrint.text()).toBe('123123112');

    await textInput.setValue('이건 한글 버전의 테스트 케이스');
    expect(textPrint.text()).toBe('이건 한글 버전의 테스트 케이스');
  });
});
