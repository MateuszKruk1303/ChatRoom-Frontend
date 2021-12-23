export interface RegisterPayload {
  name: string
  password: string
}

export type LoginPayload = RegisterPayload

export interface LoginResponse extends Pick<RegisterPayload, 'name'> {
  accessToken: string
  id: string
}
