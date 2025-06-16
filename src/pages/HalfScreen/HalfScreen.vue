<template>
  <van-popup
    v-model:show="showPopup"
    :style="{ height: '30%' }"
    position="bottom"
    round
    closeable
    :lazyRender="false"
    @closed="popupClosed"
  >
    <div class="HalfScreen-page">
      <van-image
        fit="cover"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showPopup = ref(false)

function popupClosed() {
  router.back()
}

onMounted(() => {
  showPopup.value = true
})
</script>

<style lang="scss" scoped>
// .HalfScreen-page {
// }
</style>
