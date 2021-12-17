import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { theme } from 'config'
import { PageLoader, Layout } from 'shared/components'
import {} from 'shared/components'
import { routes, store } from './App.setup'

const App = () => {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Suspense fallback={<PageLoader />}>
              <BrowserRouter>
                <Layout routes={routes} />
              </BrowserRouter>
            </Suspense>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </SnackbarProvider>
  )
}

export default App
