import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './store/user'
import generalModule from './store/general'
import itemsModule from './store/items'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    generalModule,
    userModule,
    itemsModule
  }
})
