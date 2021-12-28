export interface User {
  id: number
  name: string
  password: string
}

export type RegisterPayload = Omit<User, 'id'>

export type LoginPayload = Omit<User, 'id'>

export interface LoginResponse extends Omit<User, 'password'> {
  accessToken: string
}

export type CurrentUserResponse = Pick<User, 'id' | 'name'>
