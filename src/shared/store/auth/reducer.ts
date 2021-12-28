import { createReducer } from '@reduxjs/toolkit'
import { Resource, User } from 'shared/types'
import { initResource, setFailed, setPending, setSucceeded } from 'shared/utils'
import { register, login, logout, getCurrentUser } from './actions'
import Auth from 'shared/services/Auth'

interface State {
  login: Resource<User>
  register: Resource
}

const initialState: State = {
  login: initResource(),
  register: initResource(),
}

export default createReducer(initialState, builder =>
  builder
    .addCase(login.pending, state => {
      setPending(state.login)
    })
    .addCase(
      login.fulfilled,
      (state, { payload: { accessToken, name, id } }) => {
        Auth.setTokensInfo({ accessToken })
        setSucceeded(state.login, { name, id })
      }
    )
    .addCase(login.rejected, (state, { payload }) => {
      setFailed(state.login, payload)
    })
    .addCase(register.pending, state => {
      setPending(state.register)
    })
    .addCase(register.fulfilled, state => {
      setSucceeded(state.register)
    })
    .addCase(register.rejected, (state, { payload }) => {
      setFailed(state.register, payload)
    })
    .addCase(getCurrentUser.pending, state => {
      setPending(state.login)
    })
    .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      setSucceeded(state.login, { ...payload })
    })
    .addCase(getCurrentUser.rejected, (state, { payload }) => {
      setFailed(state.login, payload)
    })
    .addCase(logout, state => {
      Auth.removeTokens()
    })
)
