<template>
  <div class="NotFound-page">
    <h1 class="title">
      404 页面！
    </h1>
    <RouterLink class="link" to="/">
      back home
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.NotFound-page {
  padding: 20px;
  text-align: center;

  .title {
    margin-top: 50px;
    font-size: 24px;
    font-weight: bold;
    color: inherit;
  }

  .link {
    display: block;
    margin-top: 20px;
    text-decoration: underline;
  }
}
</style>
