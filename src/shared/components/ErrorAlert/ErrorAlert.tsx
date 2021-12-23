import { PropsWithChildren } from 'react'
import { Alert } from './ErrorAlert.style'

interface ErrorAlertProps {}

const ErrorAlert = ({
  children,
  ...props
}: PropsWithChildren<ErrorAlertProps>) => {
  return (
    <Alert {...props} variant="outlined" severity="error">
      {children}
    </Alert>
  )
}

export default ErrorAlert
