import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import Api, { paths } from 'shared/services/Api'
import { Auth } from 'shared/services'
import { User } from 'shared/types'

const NAMESPACE = 'auth'

export const signIn = createAsyncThunk<
  void,
  { username: string; password: string }
>(`${NAMESPACE}/signIn`, async authData => {
  // const {
  //   data: { accessToken },
  // } = await Api.post<any, AxiosResponse<{ accessToken: string }>>(
  //   paths.Auth.signIn,
  //   authData
  // )
  // Auth.setTokensInfo({ accessToken: accessToken })
})

export const getCurrentUser = createAsyncThunk<any>(
  `${NAMESPACE}/getCurrentUsers`,
  async () => {
    // const response: AxiosResponse<User> = await Api.get(paths.Users.currentUser)
    // return response.data
  }
)

export const signOut = createAsyncThunk(`${NAMESPACE}/signOut`, () => {})
