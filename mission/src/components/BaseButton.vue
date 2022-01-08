<template>
    <button class="base-button" @click="onClick">{{ name }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    name: String,
    func: String,
  },
  methods: {
    onClick() {
      if (this.func === 'rotate') {
        this.$emit('rotate'); // 문자열 회전하는 버튼
      }
    },
  },
};
</script>
