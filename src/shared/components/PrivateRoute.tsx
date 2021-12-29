import { Redirect, Route } from 'react-router-dom'
import { paths } from 'config'
import { useAuth } from 'shared/hooks'
import { ModuleRoute } from 'shared/types'
import PageLoader from './PageLoader'
import { useEffect } from 'react'

const PrivateRoute = ({ public: isPublic, ...props }: ModuleRoute) => {
  const { isAuthenticated, isLoading, getCurrentUser } = useAuth()

  useEffect(() => {
    if (!isPublic) getCurrentUser()
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <PageLoader />
  }

  return isPublic || isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to={paths.login} />
  )
}

export default PrivateRoute
