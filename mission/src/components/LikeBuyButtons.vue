<template>
  <div class="sticky-under-buttons">
    <button data-test="like-button" @click="onClick" v-html="icon"></button>
    <button data-test="buy-button">{{ price }}원 구매</button>
  </div>
</template>

<script>
export default {
  name: 'LikeBuyButtons',
  props: {
    price: Number,
  },
  data() {
    return {
      iconState: true,
    };
  },
  methods: {
    onClick() {
      this.iconState = !this.iconState;
    },
  },
  computed: {
    icon() {
      if (this.iconState) {
        return '<i class="far fa-heart" />';
      }
      return '<i class="fas fa-heart" />';
    },
  },
};
</script>
