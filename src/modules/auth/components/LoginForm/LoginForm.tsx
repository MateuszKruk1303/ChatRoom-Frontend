import { Alert, Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Form, PasswordField, TextField } from 'shared/components'
import { LoginFormFields, useFormProps } from './LoginForm.utils'

interface LoginFormProps {}

const LoginForm = (props: LoginFormProps) => {
  const { formProps, error } = useFormProps()
  const { isSubmitting } = formProps.formState
  return (
    <Form {...formProps} {...props}>
      <Grid container spacing={3}>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">xd</Alert>
          </Grid>
        )}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                name={LoginFormFields.Username}
                // label={t('login.username')}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                required
                name={LoginFormFields.Password}
                // label={t('login.password')}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              loading={isSubmitting}
            >
              xd
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  )
}

export default LoginForm
