import { Typography } from '@mui/material'
import { theme } from 'config'
import { Wrapper, Dot } from './Status.style'

interface StatusProps {
  isOnline: boolean
}

const Status = ({ isOnline }: StatusProps) => {
  return (
    <Wrapper container alignItems="center">
      <Dot theme={theme} isOnline={isOnline} />
      <Typography>{isOnline ? 'Online' : 'Offline'}</Typography>
    </Wrapper>
  )
}

export default Status
