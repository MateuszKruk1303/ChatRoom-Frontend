import { paths } from 'config'
import { Redirect } from 'react-router'
import { AuthForm, FormPage } from '../components'
import { useAuth } from 'shared/hooks'

const Register = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Redirect to={paths.home} />
  return (
    <FormPage
      title="Register"
      route={paths.login}
      linkText="Already have an account? Login"
    >
      <AuthForm path={paths.register} submitText="Register" />
    </FormPage>
  )
}

export default Register
