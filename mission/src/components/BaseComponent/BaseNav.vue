<template>
  <nav data-test="nav-container">
    <ul></ul>
  </nav>
</template>

<script>
export default {
  name: 'BaseNav',
  data() {
    return {
      navButtons: [
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
