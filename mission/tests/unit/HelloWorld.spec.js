import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld);
  const baseInput = wrapper.findComponent({ name: 'base-input' });
  const button = wrapper.find('button');
  const textPrint = wrapper.find('p[class="str-print"]');

  it('1번 요구사항, 문자열 입력란과 버튼이 있어야 한다', () => {
    expect(baseInput.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });

  it('2번 요구사항, input에서 입력한 값은 실시간으로 바로 밑에 표시가 된다', async () => {
    await baseInput.setValue('hello');
    expect(textPrint.text()).toBe('hello');

    await baseInput.setValue('hellooo');
    expect(textPrint.text()).toBe('hellooo');

    await baseInput.setValue('123123112');
    expect(textPrint.text()).toBe('123123112');

    await baseInput.setValue('이건 한글 버전의 테스트 케이스');
    expect(textPrint.text()).toBe('이건 한글 버전의 테스트 케이스');
  });

  it('3번 요구사항, 버튼을 누르면 입력/출력 문자열이 동시에 왼쪽으로 한칸씩 이동한다', async () => {
    await baseInput.setValue('banana');
    await button.trigger('click');
    expect(baseInput.element.value).toBe('ananab');
    expect(textPrint.text()).toBe('ananab');

    await baseInput.setValue('12345');
    await button.trigger('click');
    expect(baseInput.element.value).toBe('23451');
    expect(textPrint.text()).toBe('23451');

    await baseInput.setValue('안녕하세요');
    await button.trigger('click');
    expect(baseInput.element.value).toBe('녕하세요안');
    expect(textPrint.text()).toBe('녕하세요안');
  });
});
