import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import Api, { paths } from 'shared/services/Api'
import { MODULE_NAME } from '../strings'
import {
  GetAllMessagesPaylaod,
  ReceiveMessage,
  GetAllUsersResponse,
} from './actions.types'

export const getAllMessages = createAsyncThunk<
  any[],
  GetAllMessagesPaylaod,
  { rejectValue: string }
>(`${MODULE_NAME}/getAllMessages`, async (data, thunkApi) => {
  try {
    const repsonse = await Api.post(paths.Messages.root, data)
    return repsonse.data
  } catch (err: any) {
    return thunkApi.rejectWithValue(err)
  }
})

export const getAllUsers = createAsyncThunk<
  GetAllUsersResponse,
  void,
  { rejectValue: string }
>(`${MODULE_NAME}/getAllUsers`, async (_, thunkApi) => {
  try {
    const response = await Api.get(paths.Users.all)
    return response.data
  } catch (err: any) {
    return thunkApi.rejectWithValue(err)
  }
})

export const receiveMessage = createAction<ReceiveMessage>(
  `${MODULE_NAME}/receiveMessage`
)

export const userConnected = createAction<{ userId: number; socketId: string }>(
  `${MODULE_NAME}/userConnected`
)

export const userDisconnected = createAction<{ id: string }>(
  `${MODULE_NAME}/userDisconnected`
)

export const getListOfActiveUsers = createAction<{
  users: { socketId: string; userId: number }[]
}>(`${MODULE_NAME}/getListOfActiveUsers`)
