let defaultCity = '白银'
try {
  defaultCity = localStorage.city
} catch (e) {}

export default {
  city: defaultCity
}
