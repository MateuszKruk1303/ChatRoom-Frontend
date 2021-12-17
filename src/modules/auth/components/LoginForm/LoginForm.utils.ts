import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, SchemaOf } from 'yup'
import { FormProps } from 'shared/components'
import { useAuth } from 'shared/hooks'
import { useDispatch } from 'react-redux'
import { actions } from 'modules/auth/store'

export enum LoginFormFields {
  Username = 'username',
  Password = 'password',
}

export interface LoginFormValues {
  [LoginFormFields.Username]: string
  [LoginFormFields.Password]: string
}

export const defaultValues: LoginFormValues = {
  [LoginFormFields.Username]: '',
  [LoginFormFields.Password]: '',
}

export const useValidationSchema = (): SchemaOf<LoginFormValues> => {
  return object().shape({
    [LoginFormFields.Username]: string().required('xd'),
    [LoginFormFields.Password]: string().required('xd'),
  })
}

export const useOnSubmit = () => {
  const { error, signIn } = useAuth()
  const dispatch = useDispatch()
  // const onSubmit = (values: LoginFormValues) =>
  //   signIn(values[LoginFormFields.Username], values[LoginFormFields.Password])
  const onSubmit = () => {
    dispatch(actions.test({}))
  }
  return { onSubmit, error }
}

export const useFormProps = () => {
  const schema = useValidationSchema()
  const { onSubmit, error } = useOnSubmit()
  const methods = useForm<LoginFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  })
  const formProps: FormProps<LoginFormValues> = { ...methods, onSubmit }
  return { formProps, error }
}
