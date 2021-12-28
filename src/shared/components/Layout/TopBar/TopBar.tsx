import { Grid, Typography } from '@mui/material'
import { useAuth } from 'shared/hooks'
import { AppBar, LogoutButton } from './TopBar.style'

interface TopBarProps {}
const TopBar = ({}: TopBarProps) => {
  const { logout, isAuthenticated } = useAuth()
  return (
    <AppBar position="absolute">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h6">Chat Room</Typography>
        </Grid>
        {isAuthenticated && (
          <Grid item>
            <LogoutButton variant="contained" onClick={logout}>
              Logout
            </LogoutButton>
          </Grid>
        )}
      </Grid>
    </AppBar>
  )
}

export default TopBar
