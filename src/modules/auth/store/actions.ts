import { createAsyncThunk } from '@reduxjs/toolkit'
import { MODULE_NAME } from '../strings'
import Api, { paths } from 'shared/services/Api'

export const test = createAsyncThunk<any, any, { rejectValue: string }>(
  `${MODULE_NAME}/test`,
  async (payload, thunkAPI) => {
    try {
      const response = Api.get(paths.Users.root)
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)
