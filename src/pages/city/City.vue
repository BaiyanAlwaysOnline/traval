<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :msg='msg'></city-list>
    <city-alphabet :cities="cities" @change="handlemsg"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Cityheader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'

export default {
  name: 'city',
  data () {
    return {
      hotCities: [],
      cities: {},
      msg: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      const res_ = res.data
      if (res_.data && res_.ret) {
        const data = res_.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handlemsg (data) {
      this.msg = data
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang=""></style>
