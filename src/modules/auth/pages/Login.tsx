import { paths } from 'config'
import { Redirect } from 'react-router'
import { AuthForm, FormPage } from '../components'
import Axios from 'axios'
import { useAuth } from 'shared/hooks'

const Login = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Redirect to={paths.home} />
  return (
    <FormPage title="Login" route={paths.register} linkText="Create account">
      <AuthForm path={paths.login} submitText="Login" />
    </FormPage>
  )
}

export default Login
