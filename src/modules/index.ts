import { ModuleRoute } from 'shared/types'

import home from './home'
import auth from './auth'

export const reducers = {
  [home.name]: home.reducer,
  [auth.name]: auth.reducer,
}

export const routes: ModuleRoute[] = [
  // add routes below
  ...home.routes,
  ...auth.routes,
]
