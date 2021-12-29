export interface Message {
  id: number
  fromId: number
  toId: number
  text: string
}

export interface ActiveUser {
  socketId: string
  userId: number
}
