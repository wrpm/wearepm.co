import Vuex from 'vuex'
import state from './state'
import getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    state,
    getters
  })
}

export default createStore
