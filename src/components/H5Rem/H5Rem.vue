<template>
  <div className="H5Rem-root">
    <div className="p1">px字体大小</div>
    <div className="p2">px2rem字体大小</div>
    <div :style="{ fontSize: $px2rem(16) }">$px2rem字体大小</div>
  </div>
</template>

<script lang="ts" setup>
  //
</script>

<style lang="scss" scoped>
  .H5Rem-root {
    width: 150px;
    /* prettier-ignore */
    margin: 10PX auto; // PX 排除转换
    background-color: #eee;
    text-align: left;

    div {
      color: #42b983;
    }

    .p1 {
      font-size: 16px;
    }

    .p2 {
      font-size: px2rem(16);
    }
  }
</style>
