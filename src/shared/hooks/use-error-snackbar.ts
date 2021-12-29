import { useSnackbar as baseUseSnackbar, OptionsObject } from 'notistack'

export const useErrorSnackbar = () => {
  const { enqueueSnackbar } = baseUseSnackbar()

  const options: OptionsObject = {
    variant: 'error',
    autoHideDuration: 3000,
  }

  const defaultMessage = 'Something went wrong'
  const showSnackbar = (message?: string) =>
    enqueueSnackbar(message || defaultMessage, options)

  return [showSnackbar]
}
