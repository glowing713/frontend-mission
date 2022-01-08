import { shallowMount } from '@vue/test-utils';
import BaseInput from '@/components/BaseInput.vue';

describe('BaseInput.vue', () => {
  const wrapper = shallowMount(BaseInput);
  const inpElement = wrapper.find('input[type=text]');

  it('이 컴포넌트는 update:modelValue emit 이벤트를 포함해야 한다', async () => {
    inpElement.trigger('input');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
  });

  it('emit 이벤트의 콜백함수 인자로 전달되는 값이 입력과 동일해야 한다', async () => {
    // await inpElement.setValue('hello!');
    // await inpElement.setValue('hello world!야호!');
    // await inpElement.setValue('hello world!야호!12345');
    // await inpElement.setValue('hola!');
    inpElement.element.value = 'hello!';
    inpElement.trigger('input');
    expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('hello!');

    inpElement.element.value = 'hello world!야호!';
    inpElement.trigger('input');
    expect(wrapper.emitted('update:modelValue')[2][0]).toEqual('hello world!야호!');

    inpElement.element.value = 'hello world!야호!12345';
    inpElement.trigger('input');
    expect(wrapper.emitted('update:modelValue')[3][0]).toEqual('hello world!야호!12345');

    inpElement.element.value = 'hola!';
    inpElement.trigger('input');
    expect(wrapper.emitted('update:modelValue')[4][0]).toEqual('hola!');
  });
});
