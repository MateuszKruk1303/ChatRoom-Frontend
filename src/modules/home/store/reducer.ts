import { createReducer } from '@reduxjs/toolkit'
import { Resource, User } from 'shared/types'
import { initResource, setFailed, setPending, setSucceeded } from 'shared/utils'
import {
  getAllMessages,
  getAllUsers,
  receiveMessage,
  userConnected,
  userDisconnected,
  getListOfActiveUsers,
} from './actions'
import { ActiveUser, Message } from '../types'

interface State {
  messages: Resource<Message[]>
  users: Resource<User[]>
  activeUsers: ActiveUser[]
}

const initialState: State = {
  messages: initResource([]),
  users: initResource([]),
  activeUsers: [],
}

export default createReducer(initialState, builder =>
  builder
    .addCase(getAllMessages.pending, state => {
      setPending(state.messages)
    })
    .addCase(getAllMessages.fulfilled, (state, { payload }) => {
      setSucceeded(state.messages, payload)
    })
    .addCase(getAllMessages.rejected, state => {
      setFailed(state.messages)
    })
    .addCase(getAllUsers.pending, state => {
      setPending(state.users)
    })
    .addCase(getAllUsers.fulfilled, (state, { payload }) => {
      setSucceeded(state.users, payload)
    })
    .addCase(getAllUsers.rejected, state => {
      setFailed(state.users)
    })
    .addCase(receiveMessage, (state, { payload }) => {
      setSucceeded(state.messages, [...state.messages.data, payload])
    })
    .addCase(userConnected, (state, { payload }) => {
      state.activeUsers = [...state.activeUsers, payload]
    })
    .addCase(userDisconnected, (state, { payload: { id } }) => {
      state.activeUsers = state.activeUsers.filter(item => item.socketId !== id)
    })
    .addCase(getListOfActiveUsers, (state, { payload: { users } }) => {
      state.activeUsers = users
    })
)
