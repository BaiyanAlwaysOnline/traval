<template>
  <div>
    <router-link
    to="'/'"
    class="header-back"
    tag="div"
    v-show="isShow"
    >
      <div class='iconfont item-back'>&#xe624;</div>
    </router-link>
    <div class="headTitle" v-show="!isShow"  :style="opacityStyle">
      <router-link to="/">
        <div class='iconfont back-city'>&#xe624;</div>
      </router-link>
    景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      },
      timer: null
    }
  },
  methods: {
    handleScroll () {
      const scrollValue = document.documentElement.scrollTop
      // clearTimeout(this.timer)
      if (scrollValue > 0) {
        // this.timer = setTimeout(() => {
        let opacity = scrollValue / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShow = false
        // }, 30)
        console.log(this.opacityStyle)
      } else {
        this.isShow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-back
      position absolute
      left 8px
      top 6px
      .item-back
        font-weight bold
        color #fff
        cursor pointer
  .headTitle
    height $HeaderHeight
    line-height $HeaderHeight
    background $bgColor
    text-align center
    color #fff
    font-size .32rem
    position fixed
    left 0
    right 0
    top 0
    z-index 2
    .back-city
      position absolute
      left 0
      top 0
      z-index 2
      color #fff
      height $HeaderHeight
      line-height $HeaderHeight
      width 0.8rem
      text-align center
</style>
