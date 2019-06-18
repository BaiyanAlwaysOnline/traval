<template>
  <div class="headTitle">
    <router-link to="/">
      <div class='iconfont back-city'>&#xe624;</div>
    </router-link>
    <h1>城市选择</h1>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .headTitle > h1
    height $HeaderHeight
    line-height $HeaderHeight
    background $bgColor
    text-align center
    color #fff
    font-size .32rem
    position relative
  .back-city
    position absolute
    left 0
    top 0
    z-index 10
    color #fff
    height $HeaderHeight
    line-height $HeaderHeight
    width 0.8rem
    text-align center
    font-weight bold
</style>
