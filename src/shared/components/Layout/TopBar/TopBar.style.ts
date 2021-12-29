import { AppBar as BaseAppBar, Button, styled } from '@mui/material'

export const AppBar = styled(BaseAppBar)(({ theme }) => ({
  padding: theme.spacing(1.5),
}))

export const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
}))
