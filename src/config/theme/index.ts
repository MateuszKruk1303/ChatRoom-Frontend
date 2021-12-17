import { createTheme, ThemeOptions } from '@mui/material'
import palette from './palette'
import components from './components'

const theme: ThemeOptions = {
  components,
  palette,
}

export default createTheme(theme)
