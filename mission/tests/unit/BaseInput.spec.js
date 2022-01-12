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

  it('emit 이벤트의 콜백함수 인자로 전달되는 값이 입력과 동일해야 한다', async () => {
    input.element.value = 'hello!';
    input.trigger('input');
    console.log(wrapper.emitted());
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('hello!');

    input.element.value = 'hello world!야호!';
    input.trigger('input');
    expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('hello world!야호!');

    input.element.value = 'hello world!야호!12345';
    input.trigger('input');
    expect(wrapper.emitted('update:modelValue')[2][0]).toEqual('hello world!야호!12345');

    input.element.value = 'hola!';
    input.trigger('input');
    expect(wrapper.emitted('update:modelValue')[3][0]).toEqual('hola!');
  });
});
