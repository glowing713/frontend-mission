<template>
  <header data-test="header-container">
    <p data-test="mall-name">
      <a href="/" class="home-anchor"></a>
    </p>
    <nav data-test="notice-link"></nav>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
};
</script>

<style>
a {
  background-color: #000;
  width: 30px;
  height: 30px;
}
</style>
