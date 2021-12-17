import { RouteProps } from 'react-router-dom'

export interface ModuleRoute extends RouteProps {
  public?: boolean
  path: string
}

export interface Module<Name, Reducer> {
  name: Name
  reducer: Reducer
  routes: ModuleRoute[]
}
