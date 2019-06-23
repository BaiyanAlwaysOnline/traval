<template>
    <div>
      <div class="banner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" @click="handleClick">
      <div class="banner-info">
        <div class="banner-num">
          <span class="iconfont">&#xe60d;</span>
        8
        </div>
        <div class="banner-title">故宫(AAAAA景区)</div>
      </div>
    </div>
    <gallery v-show="isShow" :imgArr="imgs" @close="handleClose"></gallery>
    </div>
</template>

<script>
import Gallery from 'gallery/gallery'
export default {
  name: 'Banner',
  data () {
    return {
      isShow: false,
      imgs: ['http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg', 'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg']
    }
  },
  components: {
    Gallery
  },
  methods: {
    handleClick () {
      this.isShow = true
    },
    handleClose () {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      position absolute
      bottom 0
      left 0
      right 0
      color #fff
      font-size  .36rem
      line-height .4rem
      text-shadow: 0 1px 2px rgba(0,0,0,0.70)
      padding 0.2rem
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-num
        font-size .16rem
</style>
