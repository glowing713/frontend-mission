import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  let wrapper;
  let input;
  let button;
  let p;

  beforeEach(() => {
    wrapper = mount(Home);
    input = wrapper.get('[data-test="text-input"]');
    button = wrapper.get('[data-test="rotate-btn"]');
    p = wrapper.get('[data-test="rotated-txt"]');
  });

  it('1번 요구사항, 문자열 입력란과 버튼이 있어야 한다', () => {
    expect(input.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });

  it('2번 요구사항, input에서 입력한 값은 실시간으로 바로 밑에 표시가 된다', async () => {
    await input.setValue('hello');
    expect(p.text()).toBe('hello');
  });

  it('3번 요구사항, 버튼을 누르면 입력/출력 문자열이 동시에 왼쪽으로 한칸씩 이동한다', async () => {
    await input.setValue('banana');
    await button.trigger('click');
    expect(input.element.value).toBe('ananab');
    expect(p.text()).toBe('ananab');

    await input.setValue('12345');
    await button.trigger('click');
    expect(input.element.value).toBe('23451');
    expect(p.text()).toBe('23451');

    await input.setValue('안녕하세요');
    await button.trigger('click');
    expect(input.element.value).toBe('녕하세요안');
    expect(p.text()).toBe('녕하세요안');
  });
});
