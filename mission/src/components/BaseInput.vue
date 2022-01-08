<template>
    <input type="text" class="base-input" :value="modelValue" @input="updateText">
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
