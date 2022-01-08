import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld);
  const textInput = wrapper.findComponent({ name: 'base-input' });
  const button = wrapper.find('button');
  const textPrint = wrapper.find('p[class="str_print"]');
  it('1번 요구사항, 문자열 입력란과 버튼이 있어야 한다', () => {
    expect(textInput.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });

  it('2번 요구사항, input에서 입력한 값은 실시간으로 바로 밑에 표시가 된다', async () => {
    await textInput.setValue('hello');
    expect(textPrint.text()).toBe('hello');

    await textInput.setValue('hellooo');
    expect(textPrint.text()).toBe('hellooo');

    await textInput.setValue('123123112');
    expect(textPrint.text()).toBe('123123112');

    await textInput.setValue('이건 한글 버전의 테스트 케이스');
    expect(textPrint.text()).toBe('이건 한글 버전의 테스트 케이스');
  });

  it('3번 요구사항, 버튼을 누르면 입력/출력 문자열이 동시에 왼쪽으로 한칸씩 이동한다', async () => {
    await textInput.setValue('banana');
    await button.trigger('click');
    setTimeout(() => {
      expect(textInput.text()).toBe('ananab');
      expect(textPrint.text()).toBe('ananab');
    }, 2000);

    await textInput.setValue('12345');
    await button.trigger('click');
    setTimeout(() => {
      expect(textInput.text()).toBe('23451');
      expect(textPrint.text()).toBe('23451');
    }, 2000);

    await textInput.setValue('안녕하세요');
    await button.trigger('click');
    setTimeout(() => {
      expect(textInput.text()).toBe('녕하세요안');
      expect(textPrint.text()).toBe('녕하세요안');
    }, 2000);
  });
});
