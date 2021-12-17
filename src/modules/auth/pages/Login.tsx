import { paths } from 'config'
import { Redirect } from 'react-router'
import { LoginForm, FormPage } from '../components'
import Axios from 'axios'

const Login = () => {
  const isAuthenticated = false
  if (isAuthenticated) return <Redirect to={paths.home} />
  return (
    <FormPage title="login" route={paths.register} linkText="registerLinkText">
      <LoginForm />
    </FormPage>
  )
}

export default Login
