import { createStore } from 'redux'
import { authReducer } from './authRedux'

const store = createStore(authReducer)

export default store