import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import Api, { paths } from 'shared/services/Api'
import {
  RegisterPayload,
  LoginPayload,
  LoginResponse,
  CurrentUserResponse,
} from './actions.types'

const NAMESPACE = 'auth'

export const register = createAsyncThunk<void, RegisterPayload>(
  `${NAMESPACE}/register`,
  async (data, thunkApi) => {
    try {
      const response = await Api.post<any, AxiosResponse>(
        paths.Auth.register,
        data
      )

      return response.data
    } catch (err: any) {
      return thunkApi.rejectWithValue(err)
    }
  }
)

export const login = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>(`${NAMESPACE}/login`, async (data, thunkApi) => {
  try {
    const response = await Api.post<LoginResponse, AxiosResponse>(
      paths.Auth.login,
      data
    )
    return response.data
  } catch (err: any) {
    return thunkApi.rejectWithValue(err)
  }
})

export const getCurrentUser = createAsyncThunk<
  CurrentUserResponse,
  void,
  { rejectValue: string }
>(`${NAMESPACE}/getCurrentUser`, async (data, thunkApi) => {
  try {
    const response = await Api.get<CurrentUserResponse, AxiosResponse>(
      paths.Auth.me
    )
    return response.data
  } catch (err: any) {
    return thunkApi.rejectWithValue(err)
  }
})

export const logout = createAction(`${NAMESPACE}/logout`)
