import axios from 'axios'

const api = {
  cookie: null,
  instance: axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? null: `http://localhost:${process.env.VUE_APP_FLASK_PORT}`
  }),

  async dealHand(n=5){
    const { data: response, headers } = await this.instance.get(`/api/cards/dealer/deal/${n}`)
    return response
  },

  async getDeck(){
    const { data: response, headers } = await this.instance.get('/api/cards/deck')
    if ('token' in response){
      this.instance.defaults.headers.common['CARD-PLAYER-ID'] = response.token
    }
    return response
  },

  async shuffleDeck(times=3){
    const { data: response } = await this.instance.put('/api/cards/dealer/deck/shuffle')
    return response
  }
}

export const FlaskPlugin = {
  install(Vue){
    Vue.prototype.$flask = api
  }
}