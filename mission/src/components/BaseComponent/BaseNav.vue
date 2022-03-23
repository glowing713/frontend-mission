<template>
  <nav data-test="nav-container" class="nav-container">
    <ul>
      <router-link to="/"
        ><li><i :class="['fas', 'fa-home']" /></li
      ></router-link>
      <router-link to="/"
        ><li><i :class="['fas', 'fa-search']" /></li
      ></router-link>
      <router-link to="/cart" data-test="cart-link"
        ><li><i :class="['fas', 'fa-shopping-cart']" /></li
      ></router-link>
      <router-link to="/"
        ><li><i :class="['fas', 'fa-heart']" /></li
      ></router-link>
      <router-link to="/"
        ><li><i :class="['fas', 'fa-user']" /></li
      ></router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BaseNav',
};
</script>

<style scoped>
.nav-container ul,
li {
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

.nav-container a {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
}
</style>
