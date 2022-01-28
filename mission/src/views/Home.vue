<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <base-input v-model="inputText"/>
    <base-button name="제출" func="rotate" @rotate="rotateText"/>
    <base-button name="알림" func="alert" @alert="alertMessage"/>
    <p class="str-print" data-test="rotated-txt">{{ inputText }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import BaseInput from '@/components/BaseComponent/BaseInput.vue';
import BaseButton from '@/components/BaseComponent/BaseButton.vue';

export default {
  components: { HelloWorld, BaseInput, BaseButton },
  data() {
    return {
      inputText: '',
      btnPressed: 0,
    };
  },
  methods: {
    rotateText() {
      const newText = this.inputText + this.inputText[0];
      this.inputText = newText.slice(1);
    },
    alertMessage() {
      let template = `✍🏻 Input text: ${this.inputText} ✍🏻\n`;
      this.btnPressed += 1;
      template += (this.btnPressed % 3 ? `🔥 You just pressed ${this.btnPressed} times! 🔥` : '👏🏻👏🏻Clap👏🏻👏🏻');
      alert(template); // eslint-disable-line no-alert
    },
  },
};
</script>
