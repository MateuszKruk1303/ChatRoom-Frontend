import { useSnackbar as baseUseSnackbar, OptionsObject } from 'notistack'
import strings from 'locales'

export const useErrorSnackbar = () => {
  const { enqueueSnackbar } = baseUseSnackbar()

  const options: OptionsObject = {
    variant: 'error',
    autoHideDuration: 3000,
  }

  const defaultMessage = strings.ERROR_MESSAGE
  const showSnackbar = (message?: string) =>
    enqueueSnackbar(message || defaultMessage, options)

  return [showSnackbar]
}
