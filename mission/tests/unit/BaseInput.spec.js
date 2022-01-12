import { shallowMount } from '@vue/test-utils';
import BaseInput from '@/components/BaseInput.vue';

describe('BaseInput.vue', () => {
  let wrapper;
  let input;
  beforeEach(() => {
    wrapper = shallowMount(BaseInput);
    input = wrapper.get('[data-test="text-input"]');
  });

  it('이 컴포넌트는 update:modelValue emit 이벤트를 포함해야 한다', async () => {
    input.trigger('input');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
  });

  it('emit 이벤트의 콜백함수 인자로 전달되는 값이 입력과 동일해야 한다(Eng)', async () => {
    input.element.value = 'hello!';
    input.trigger('input');
    const emitParameter = wrapper.emitted('update:modelValue')[0][0];
    expect(emitParameter).toEqual('hello!');
  });
  it('emit 이벤트의 콜백함수 인자로 전달되는 값이 입력과 동일해야 한다(Kor)', async () => {
    input.element.value = '안녕하세요!';
    input.trigger('input');
    const emitParameter = wrapper.emitted('update:modelValue')[0][0];
    expect(emitParameter).toEqual('안녕하세요!');
  });
  it('emit 이벤트의 콜백함수 인자로 전달되는 값이 입력과 동일해야 한다(Number)', async () => {
    input.element.value = '12345';
    input.trigger('input');
    const emitParameter = wrapper.emitted('update:modelValue')[0][0];
    expect(emitParameter).toEqual('12345');
  });
});
