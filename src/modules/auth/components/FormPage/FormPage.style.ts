import { styled, Typography } from '@mui/material'
import { Link as BaseLink } from 'react-router-dom'

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}))

export const Link = styled(BaseLink)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
}))
