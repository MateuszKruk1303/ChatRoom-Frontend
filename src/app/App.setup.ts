import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { reducers } from 'modules'
import packageJson from '../../package.json'
import { reducer as common } from 'shared/store'

// Routes
export { routes } from 'modules'

// Store
export const store = configureStore({
  reducer: combineReducers({
    app: () => ({ version: packageJson.version }),
    ...reducers,
    common,
  }),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
