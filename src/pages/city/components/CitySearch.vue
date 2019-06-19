<template>
  <div>
    <div class="search">
      <input v-model="keyValue" class="search-input" type="text" placeholder="请输入城市或者拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyValue">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{ item.name }}</li>
        <li class="search-item border-bottom spe1" v-show="noFound">未查到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyValue: '',
      list: [],
      timer: null
    }
  },
  computed: {
    noFound () {
      return !this.list.length
    }
  },
  watch: {
    keyValue () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyValue) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item, index) => {
            if (item.spell.indexOf(this.keyValue) > -1 || item.name.indexOf(this.keyValue) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-bottom
   &:before
     border-color #ccc
  .search
    height 0.72rem
    padding 0.1rem
    background $bgColor
    .search-input
      box-sizing border-box
      height 0.62rem
      padding 0 0.2rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
  .search-content
    position absolute
    overflow hidden
    left 0
    top 1.78rem
    bottom 0
    right 0
    z-index 10
    background #fff
    .search-item
      line-height 0.62rem
      padding-left .2rem
      color #666
</style>
