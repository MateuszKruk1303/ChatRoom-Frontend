import { createReducer } from '@reduxjs/toolkit'
import { Resource, User } from 'shared/types'
import { initResource, setPending, setSucceeded, setFailed } from 'shared/utils'
import { signIn, signOut, getCurrentUser } from './actions'

interface State {
  signIn: Resource
  signUp: Resource
  currentUser: Resource<User>
}

const initialState: State = {
  signIn: initResource(),
  signUp: initResource(),
  currentUser: initResource(),
}

const reducer = createReducer(initialState, builder =>
  builder
    .addCase(signIn.pending, state => {
      setPending(state.signIn)
    })
    .addCase(signIn.fulfilled, state => {
      setSucceeded(state.signIn)
    })
    .addCase(signIn.rejected, state => {
      setFailed(state.signIn)
    })
    .addCase(signOut.pending, state => {
      setPending(state.signUp)
    })
    .addCase(signOut.fulfilled, state => {
      setSucceeded(state.signUp)
    })
    .addCase(signOut.rejected, state => {
      setFailed(state.signUp)
    })
    .addCase(getCurrentUser.pending, state => {
      setPending(state.currentUser)
    })
    .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      setSucceeded(state.currentUser, payload)
    })
    .addCase(getCurrentUser.rejected, state => {
      setFailed(state.currentUser)
    })
)

export default reducer
