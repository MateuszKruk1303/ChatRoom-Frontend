import { MODULE_NAME } from './strings'
import { Module } from 'shared/types'
import { reducer } from './store'
import routes from './routes'

const moduleConfig: Module<typeof MODULE_NAME, typeof reducer> = {
  routes,
  reducer,
  name: MODULE_NAME,
}

export default moduleConfig
