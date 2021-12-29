import { Dispatch } from 'redux'
import socketio, { Socket } from 'socket.io-client'
import { actions } from '../store'
import { ActiveUser, Message } from '../types'
import { messages } from './messages'

export * from './messages'

export let socket: Socket | null = null

const { REACT_APP_WS_URL } = process.env

export const connectChatServer = (
  id: number,
  dispatch: Dispatch<any>,
  token: string | null
) => {
  socket = socketio(`${REACT_APP_WS_URL}`, {
    query: {
      token,
      id,
    },
  })

  socket.on(messages.message, (response: Message) => {
    dispatch(actions.receiveMessage(response))
  })

  socket.on(messages.userConnected, (response: ActiveUser) => {
    dispatch(actions.userConnected(response))
    dispatch(actions.getAllUsers())
  })

  socket.on(messages.userDisconnected, (response: { id: string }) => {
    dispatch(actions.userDisconnected(response))
  })

  socket.on(messages.activeUsers, (response: { users: ActiveUser[] }) => {
    dispatch(actions.getListOfActiveUsers(response))
  })
}

export const disconnect = () => socket?.disconnect()
