import { paths } from 'config'
import { Redirect } from 'react-router'
import { LoginForm, FormPage } from '../components'

const Register = () => {
  const isAuthenticated = false
  if (isAuthenticated) return <Redirect to={paths.home} />
  return (
    <FormPage title="register" route={paths.signIn} linkText="loginRouteText">
      <LoginForm />
    </FormPage>
  )
}

export default Register
