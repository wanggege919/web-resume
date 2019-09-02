<template>
    <div class="portfolio-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.img" alt="">
            </swiper-slide>          
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'PortfolioSwiper',
    props: {
        swiperList: {
            type: Array
        }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
              el: '.swiper-pagination'
          },
          autoplay: {
              delay: 3000
          },
          loop: true
        }
      }
    } 
}
</script>
<style lang="stylus" scoped>
    .img-swiper
        width 100%
</style>