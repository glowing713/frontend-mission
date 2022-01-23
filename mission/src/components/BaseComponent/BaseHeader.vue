<template>
  <header
    data-test="header-container"
    class="header"
    :class="{ 'is-hidden': !showHeader }"
  >
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
  data() {
    return {
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return;
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>

<style scoped>
.header {
  width: auto;
  height: 27px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ebeef2;
  transform: translateY(0);
  transition: transform 300ms linear;
}

.header.is-hidden {
  transform: translateY(-100%);
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

.mall-name a,
a:visited {
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
