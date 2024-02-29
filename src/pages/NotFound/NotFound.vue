<template>
  <div class="NotFound-page">
    <h1>Nothing to see here!</h1>
    <p>
      <RouterLink to="/">Go to the home page</RouterLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
  .NotFound-page {
    text-align: center;
  }
</style>
