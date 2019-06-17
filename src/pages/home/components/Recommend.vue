<template>
  <div>
      <div class="title border-bottom">热销推荐</div>
      <ul>
        <li class="item" v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: [{
        id: '00001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_250x250_1ab31e91.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的汉阳主题公园'
      }, {
        id: '00002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_250x250_1ab31e91.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的汉阳主题公园'
      }, {
        id: '00003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_250x250_1ab31e91.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的汉阳主题公园'
      }, {
        id: '00004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_250x250_1ab31e91.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的汉阳主题公园'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
    @import '~styles/mixins.styl'
    .title
      margin-top .2rem
      line-height .8rem
      background #eee
      text-indent .2rem
    .item
      display flex
      height 1.9rem
      overflow hidden
      .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
      .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
          line-height .54rem
          font-size .32rem
          ellipsis()
        .item-desc
          line-height .4rem
          color #ccc
          ellipsis()
        .item-button
          background #ff9300
          padding 0 .2rem
          margin-top .16rem
          border-radius .06rem
          line-height 0.44rem
</style>
