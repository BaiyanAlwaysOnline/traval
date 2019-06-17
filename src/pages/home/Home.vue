<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
    </div>
</template>
<script>
// 引入局部组件  需要申明
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style></style>
