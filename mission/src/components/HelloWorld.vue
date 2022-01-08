<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <base-input v-model="inputText"/>
    <base-button name="제출" func="rotate" @rotate="rotateText"/>
    <base-button name="알림" func="alert" @alert="alertMessage"/>
    <p class="str-print">{{ inputText }}</p>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseInput, BaseButton },
  props: {
    msg: String,
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
