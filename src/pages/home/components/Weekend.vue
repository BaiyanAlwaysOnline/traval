<template>
  <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item" v-for="item of list" :key="item.id">
            <div class="item-img-wrapper">
              <img class="item-img" :src="item.imgUrl" alt="">
            </div>
            <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc}}</p>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      list: [{
        id: '00001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
        title: '大连汤泡圣地',
        desc: '享受生活，放松自己，来一段轻松旅程'
      }, {
        id: '00002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的汉阳主题公园'
      }, {
        id: '00003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的汉阳主题公园'
      }, {
        id: '00004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg',
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
      line-height .8rem
      background #eee
      text-indent .2rem
    .item-img-wrapper
      overflow hidden
      padding-bottom 33.9%
      height 0
      .item-img
        width 100%
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
</style>
