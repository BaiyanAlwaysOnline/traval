<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Cityheader'
import CitySearch from './components/CitySearch'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang=""></style>
