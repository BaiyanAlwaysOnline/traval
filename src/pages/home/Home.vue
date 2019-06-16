<template>
    <div>
      <home-header></home-header>
    </div>
</template>
<script>
// 引入局部组件  需要申明
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
<style></style>
