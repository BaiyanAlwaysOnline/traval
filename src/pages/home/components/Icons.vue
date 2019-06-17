<template>
    <div class="icons">
        <swiper :options="swiperOption">
        <!-- slides -->
            <swiper-slide  v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icons-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination circles"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .icons >>> .swiper-pagination-bullet-active
      background rgba(0,175,190,.8)
    .icons >>> .swiper-container
      height 0
      padding-bottom 55%
      position relative
    .icons
      margin-top .1rem
     .icon
       overflow hidden
       float left
       width 25%
       padding-bottom 25%
       position relative
       height 0
       .icons-img
         position absolute
         left 0
         right 0
         top 0
         bottom .44rem
         box-sizing border-box
         padding .1rem
         .icon-img-content
           display block
           height 100%
           margin 0 auto
       .icon-desc
         position absolute
         left 0
         right 0
         bottom 0
         line-height .44rem
         height 0.44rem
         margin 0 auto
         color $darkTextColor
         text-align center
     .circles
       margin-bottom -0.1rem
</style>
