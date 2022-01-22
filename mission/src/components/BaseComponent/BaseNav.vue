<template>
  <nav data-test="nav-container">
    <ul>
      <li v-for="icon in buttonIcons" :key="icon.id" v-html="icon.html"></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BaseNav',
  data() {
    return {
      buttonIcons: [
        {
          id: 'home',
          html: '<i class="fas fa-home" />',
        },
        {
          id: 'search',
          html: '<i class="fas fa-search" />',
        },
        {
          id: 'bucket',
          html: '<i class="fas fa-shopping-cart" />',
        },
        {
          id: 'likes',
          html: '<i class="fas fa-heart" />',
        },
        {
          id: 'mypage',
          html: '<i class="fas fa-user" />',
        },
      ],
    };
  },
};
</script>

<style>

</style>
