<template>
    <div class="container" @click="handleClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
      <!-- slides -->
          <swiper-slide v-for="(item, index) of imgArr" :key="index">
            <img :src="item">
          </swiper-slide>
      <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgArr: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background #000
    display flex
    justify-content center
    z-index 99
    flex-direction column
    .wrapper
      width 100%
      padding-bottom 70.75%
      height 0
      img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
