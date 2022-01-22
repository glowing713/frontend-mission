<template>
  <nav data-test="nav-container" class="nav-container">
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

<style scoped>
.nav-container ul, li {
  list-style: none;
}

.nav-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 32px);
  height: 23px;
  z-index: 999;
  padding: 16px;
  border-top: 1px solid #ebeef2;
  background: #fff;
}

.nav-container ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row nowrap;
}

.nav-container li {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}
</style>
