<template>
  <ul class="list">
    <li class="item"
    v-for="items of letters"
    :key="items"
    :ref="items"
    @click="handleChoose"
    @touchstart="handleStart"
    @touchmove="handleMove"
    @touchend="handleEnd"
    >{{ items }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleChoose (e) {
      // console.log(e.target.innerHTML)
      const msg = e.target.innerHTML
      this.$emit('change', msg)
    },
    handleStart () {
      this.touchStatus = true
    },
    handleMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const endY = e.touches[0].clientY
        const resultY = Math.floor((endY - startY) / 20)
        if (resultY >= 0 && resultY < 23) {
          const element = this.letters[resultY]
          this.$emit('change', element)
        }
      }
    },
    handleEnd () {
      this.touchStatus = false
    }

  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
