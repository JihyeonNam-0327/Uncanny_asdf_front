import axios from 'axios'

const API_URL = process.env.VUE_APP_API_ENDPOINT
const CLIENT_ID= '5qehk43mhz'
const CLIENT_SECRET = 'z2NIwCF390EswWakrLISwpokSmOXmZnXyECOeZEK'

const API = {
  // 1. Geocoding
  getGeoInfo (request) {
    let url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${request}`
    let headers = { 
      'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
      'X-NCP-APIGW-API-KEY': CLIENT_SECRET
    }

    return axios.get(url, { params: request, headers: headers })
  },
  // 2. 메뉴 리스트
  menuList (request, token) {
    let url = `${API_URL}/users/api`
    let headers = { 
      Authorization: token,
    }

    return axios.get(url, { params : request, headers: headers  })
  }
}

export default API
