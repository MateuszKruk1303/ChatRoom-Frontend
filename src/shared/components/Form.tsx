import { HTMLProps, PropsWithChildren } from 'react'
import { FormProvider, FormProviderProps, SubmitHandler } from 'react-hook-form'

export type FormProps<T = unknown> = Omit<
  FormProviderProps<T> &
    Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> & {
      onSubmit: SubmitHandler<T>
    },
  'children'
>

const Form = ({
  children,
  onSubmit,
  style,
  className,
  ...props
}: PropsWithChildren<FormProps<any>>) => (
  <form onSubmit={props.handleSubmit(onSubmit)} className={className}>
    <FormProvider {...props}>{children}</FormProvider>
  </form>
)

export default Form
