<template>
  <div class="H5Rem-comp">
    <div class="p1">
      px字体大小
    </div>
    <div class="p2">
      px2rem字体大小
    </div>
    <div :style="{ fontSize: $px2rem(16) }">
      $px2rem字体大小
    </div>
  </div>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
.H5Rem-comp {
  width: 150px;
  margin: 10PX auto; // PX 排除转换
  text-align: left;
  background-color: #eee;

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
