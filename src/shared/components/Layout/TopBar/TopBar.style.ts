import { AppBar as BaseAppBar, Button, styled } from '@mui/material'

export const AppBar = styled(BaseAppBar)(({ theme }) => ({
  padding: theme.spacing(2),
}))

export const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
}))
