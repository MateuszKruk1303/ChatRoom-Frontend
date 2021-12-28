import { Message } from '../types'
import { User } from 'shared/types'

export type GetAllMessagesPaylaod = Pick<Message, 'fromId' | 'toId'>

export type ReceiveMessage = Message

export type GetAllUsersResponse = User[]
