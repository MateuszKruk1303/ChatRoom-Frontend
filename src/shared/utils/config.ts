import { RouteProps } from 'react-router-dom'

const addPaths = (basePath: string) => (path: string) =>
  `${basePath}${path}`.replaceAll('//', '/')

export const addBasePath = <T extends RouteProps>(
  basePath: string,
  routes: T[]
) =>
  routes.map(({ path = '', ...route }) => ({
    ...route,
    path: Array.isArray(path)
      ? path.map(addPaths(basePath))
      : addPaths(basePath)(path as string),
  }))
