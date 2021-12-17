import { PaletteOptions } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'

const palette: PaletteOptions = {
  primary: {
    light: '#EDF5F9',
    main: '#1070B0',
    dark: '#88B8D8',
    contrastText: '#EAF1F0',
  },
  secondary: {
    main: '#FFBA49',
    dark: '#FFA10A',
    light: '#FFD085',
  },
  text: {
    primary: '#071104',
  },
  error: {
    main: '#B00000',
    light: '#FBF2F2',
  },
  warning: {
    main: '#DE5B00',
    light: '#FFFEF7',
  },
  grey: {
    300: '#B3B3B3',
    400: '#c6c6c6',
  },
}

export default createPalette(palette)
