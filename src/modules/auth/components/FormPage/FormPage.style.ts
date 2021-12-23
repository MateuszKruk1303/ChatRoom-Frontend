import { styled, Typography, Card as BaseCard } from '@mui/material'
import { Link as BaseLink } from 'react-router-dom'

const CARD_WIDTH = 600

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 600,
  marginBottom: theme.spacing(4),
}))

export const Card = styled(BaseCard)(({ theme }) => ({
  width: CARD_WIDTH,
}))

export const Link = styled(BaseLink)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
}))
