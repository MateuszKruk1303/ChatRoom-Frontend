import { styled, Alert as BaseAlert } from '@mui/material'

export const Alert = styled(BaseAlert)(({ theme }) => ({
  borderColor: theme.palette.error.main,
  '& *': {
    color: theme.palette.error.main,
  },
}))
