<template>
    <div class="order-complete-container">
        <div class="complete-text">
            <i :class="['fas', 'fa-thumbs-up']"></i>
            <p>주문이 완료되었습니다.</p>
            <button @click="goHome">홈으로</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OrderComplete',
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped>
.order-complete-container {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
}

.complete-text {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.complete-text i {
    font-size: 40px;
}

.complete-text p {
    font-size: 20px;
    word-break: keep-all;
}

.complete-text button {
    width: 40%;
    height: 10%;
}
</style>
