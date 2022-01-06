<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" class="str_input" v-model="strInput">
    <button class="rotate_btn">rotate</button>
    <p class="str_print">입력된 문자열: {{ strInput }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      strInput: '',
    };
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
