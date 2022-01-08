<template>
    <input type="text" class="base-input" @input="updateText">
</template>

<script>
export default {
  name: 'BaseInput',
  methods: {
    updateText(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>
