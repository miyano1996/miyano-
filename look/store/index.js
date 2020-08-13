import Vue from 'vue'
import Vuex from 'vuex'
import students from './students.js'
import jsqModel from './jsqModel.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    students,jsqModel
  }
})
