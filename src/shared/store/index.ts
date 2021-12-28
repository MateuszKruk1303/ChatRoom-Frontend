import { combineReducers } from 'redux'
import auth from './auth'
import root from './root'

export const actions = {
  auth: auth.actions,
  root: root.actions,
}

export const selectors = {
  auth: auth.selectors,
}

export const reducer = combineReducers({
  auth: auth.reducer,
})
