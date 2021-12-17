import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { paths } from 'config'
import { useAuth } from 'shared/hooks'
import { LoadingStatus, ModuleRoute } from 'shared/types'
import { getCurrentUser } from 'shared/store/auth/actions'
import PageLoader from './PageLoader'

const PrivateRoute = ({ public: isPublic, ...props }: ModuleRoute) => {
  const dispatch = useDispatch()
  const { isAuthenticated, loading } = useAuth()

  useEffect(() => {
    dispatch(getCurrentUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if ([LoadingStatus.Pending].includes(loading)) {
    return <PageLoader />
  }

  return isPublic || isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to={paths.signIn} />
  )
}

export default PrivateRoute
