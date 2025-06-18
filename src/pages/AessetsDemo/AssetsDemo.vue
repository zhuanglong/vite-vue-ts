<template>
  <div class="AssetsDemo-page">
    <NavBar />
    <div class="main-content">
      <div class="fonts-wrapper">
        <h3 class="title">
          Fonts
        </h3>
        <div>Hello React! 你好 React！123</div>
        <div>Hello React! 你好 React！123</div>
        <div>Hello React! 你好 React！123</div>
      </div>
      <div class="icon-font-wrapper">
        <h3 class="title">
          Icon Font
        </h3>
        <i class="iconfont icon-zhongyingwen" />
        <i class="iconfont icon-suoxiao" />
        <i class="iconfont icon-fangda" />
        <i class="iconfont icon-contentright" />
        <i class="iconfont icon-zhuti" />
      </div>
      <div class="icons-wrapper">
        <h3 class="title">
          Icons
        </h3>
        <img :src="bangbangtangIcon" alt="icon">
        <img :src="getImg('baomihua')" alt="icon">
        <img :src="getImg('sanmingzhi')" alt="icon">
        <span class="bg-img" />
        <div class="svg-row">
          <SvgIcon name="svg-hanbao" />
          <SvgIcon name="svg-pintu" color="currentColor" />
        </div>
      </div>
      <div class="lotties-wrapper">
        <h3 class="title">
          Lotties
        </h3>
        <div id="lottie1" />
        <div id="lottie2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// https://github.com/airbnb/lottie-web/issues/2927#issuecomment-1593391384
import lottie, { type AnimationItem } from 'lottie-web/build/player/lottie_light'
import { onMounted, onUnmounted } from 'vue'
import bangbangtangIcon from '@/assets/icons/bangbangtang.svg'

import Aniki_Hamster from '@/assets/lotties/Aniki_Hamster.json'
import Polite_Chicky from '@/assets/lotties/Polite_Chicky.json'
import NavBar from '@/components/NavBar'
// import SvgIcon from '@/components/SvgIcon'

let lottie1: AnimationItem
let lottie2: AnimationItem

// 这种方式会把 icons/ 下的 svg 都打包进去
function getImg(name: string) {
  // 动态获取不能用路径别名
  return new URL(`../../assets/icons/${name}.svg`, import.meta.url).href
}

onMounted(() => {
  lottie1 = lottie.loadAnimation({
    container: document.getElementById('lottie1')!,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: Polite_Chicky,
  })
  lottie2 = lottie.loadAnimation({
    container: document.getElementById('lottie2')!,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: Aniki_Hamster,
  })
})

onUnmounted(() => {
  lottie1?.destroy()
  lottie2?.destroy()
})
</script>

<style lang="scss" scoped>
.AssetsDemo-page {
  .main-content {
    padding: 20px;
  }

  .title {
    padding: 10px 0;
    font-size: 18px;
  }

  .icon-font-wrapper {
    i {
      margin-right: 5px;
    }
  }

  .icons-wrapper {
    img {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    .svg-row {
      font-size: 16px;

      svg {
        display: inline-block;
        margin-right: 5px;
      }
    }

    .bg-img {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 5px;
      vertical-align: middle;
      background-image: url("@/assets/icons/bingqilin.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .fonts-wrapper {
    div:nth-child(2) {
      font-family: YouSheBiaoTiHei;
    }

    div:nth-child(3) {
      font-family: MetroDF;
    }

    div:nth-child(4) {
      font-family: DIN;
    }
  }

  .lotties-wrapper {
    div {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
  }
}
</style>
