<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list ="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      isShow: false,
      list: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getInfo () {
      this.$http
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getInfoSucc)
    },
    getInfoSucc (data) {
      const res = data.data
      if (res.ret) {
        const data = res.data
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50 rem
</style>
