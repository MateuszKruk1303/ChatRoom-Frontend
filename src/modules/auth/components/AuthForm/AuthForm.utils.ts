import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, SchemaOf } from 'yup'
import { FormProps } from 'shared/components'
import { useAuth } from 'shared/hooks'

export enum AuthFormFields {
  Name = 'name',
  Password = 'password',
}

export interface AuthFormValues {
  [AuthFormFields.Name]: string
  [AuthFormFields.Password]: string
}

export const defaultValues: AuthFormValues = {
  [AuthFormFields.Name]: '',
  [AuthFormFields.Password]: '',
}

export const useValidationSchema = (): SchemaOf<AuthFormValues> => {
  return object().shape({
    [AuthFormFields.Name]: string().required('name is required').min(4),
    [AuthFormFields.Password]: string().required('password is required').min(4),
  })
}

export const useOnRegisterSubmit = () => {
  const { registerError, register } = useAuth()
  const onRegisterSubmit = (values: AuthFormValues) =>
    register(values[AuthFormFields.Name], values[AuthFormFields.Password])

  return { onRegisterSubmit, registerError }
}

export const useOnLoginSubmit = () => {
  const { loginError, login } = useAuth()
  const onLoginSubmit = (values: AuthFormValues) =>
    login(values[AuthFormFields.Name], values[AuthFormFields.Password])

  return { onLoginSubmit, loginError }
}

export const useFormProps = (isLoginForm: boolean) => {
  const schema = useValidationSchema()

  const { onLoginSubmit, loginError } = useOnLoginSubmit()
  const { onRegisterSubmit, registerError } = useOnRegisterSubmit()

  const methods = useForm<AuthFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  })
  const [onSubmit, error] = [
    isLoginForm ? onLoginSubmit : onRegisterSubmit,
    isLoginForm ? loginError : registerError,
  ]

  const formProps: FormProps<AuthFormValues> = { ...methods, onSubmit }
  return { formProps, error }
}
