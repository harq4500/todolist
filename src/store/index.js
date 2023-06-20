import {createStore} from 'vuex'

import users from './users'
import todoes from './todoes'
import payments from './payments'

export default createStore({
    modules:{
        users,
        todoes,
        payments
    }
  })