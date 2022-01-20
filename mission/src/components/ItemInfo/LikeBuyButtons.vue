<template>
  <div class="sticky-under-buttons">
    <button
      class="like-btn"
      data-test="like-button"
      @click="onClick"
      v-html="icon"
    ></button>
    <button class="buy-btn" data-test="buy-button">{{ price }}원 구매</button>
  </div>
</template>

<script>
export default {
  name: 'LikeBuyButtons',
  props: {
    price: String,
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

<style>
.sticky-under-buttons {
  position: fixed;
  background-color: white;
  width: 100%;
  height: 90px;
  bottom: 0px;
  border-top: 1px solid transparent;
  border-top-color: rgba(0, 27, 55, 0.1);
  display: flex;
  align-items: stretch;
}

button {
  all: unset;
  border: 1.5px solid transparent;
  border-color: rgba(0, 27, 55, 0.1);
  border-radius: 3px;
}

.like-btn {
  background-color: white;
  margin: 13px 0px 13px 13px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.buy-btn {
  background-color: black;
  margin: 13px 13px 13px 13px;
  color: white;
  font-weight: bold;
  flex-grow: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
</style>
