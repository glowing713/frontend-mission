<template>
    <input type="text" data-test="text-input" :value="modelValue" @input="updateText">
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: String,
  },
  methods: {
    updateText(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>
