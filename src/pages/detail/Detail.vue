<template>
  <div>
    <header></header>
    <banner></banner>
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'

export default {
  name: 'Detail',
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Banner,
    Header
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50 rem
</style>
