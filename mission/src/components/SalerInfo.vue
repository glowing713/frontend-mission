<template>
    <div class="saler-info" data-test="saler-info">
        <img src="@/assets/logo.svg" alt="saler-img" data-test="saler-img">
        <p data-test="saler-name">{{ salerName }}</p>
        <div class="saler-tags" data-test="saler-tags">
            <p v-for="saler in salerTags" :key="saler.id" data-test="saler-tag">{{ saler.tag }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SalerInfo',
  props: {
    salerName: String,
    salerTags: Array,
  },
};
</script>
