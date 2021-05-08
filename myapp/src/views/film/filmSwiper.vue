<template >
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
      <!-- <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
export default {
  mounted() {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
  }
}
</script>
