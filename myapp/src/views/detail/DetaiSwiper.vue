<template >
  <div class="swiper-container" :class="swiperclass">
    <div class="swiper-wrapper">
      <slot></slot>
      <!-- <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
export default {
  props: {
    perslide: {
      type: Number,
      default: 2
    },
    swiperclass: {
      type: String,
      default: 'swiper-container'
    }
  },
  mounted() {
    /* eslint-disable no-new */
    new Swiper('.' + this.swiperclass, {
      slidesPerView: this.perslide,
      spaceBetween: 10,
      freeMode: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
