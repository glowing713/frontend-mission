<template>
  <header data-test="header-container" class="header-container">
    <p data-test="mall-name" class="mall-name">
      <a href="/" class="home-anchor">Hwan</a>
    </p>
    <nav data-test="notice-link" class="notice-link">
      <i class="fas fa-bell" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
};
</script>

<style scoped>
.header-container {
  width: auto;
  height: 55px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ebeef2;
}

.mall-name {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mall-name .home-anchor {
  display: block;
  width: 90px;
  height: 30px;
  font-size: 22px;
  font-weight: bold;
}

.mall-name a, a:visited {
  text-decoration: none;
  color: inherit;
}

.notice-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.notice-link i {
  font-size: 22px;
}
</style>
