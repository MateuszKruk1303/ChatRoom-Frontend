import { HTMLAttributes } from 'react'
import { CircularProgress, Typography } from '@mui/material'
import { Container } from './PageLoader.style'

export interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
  size?: number
}

const PageLoader = ({ label, size = 100, ...props }: PageLoaderProps) => (
  <Container {...props}>
    <CircularProgress size={size} />
    <Typography variant="subtitle1" color="textPrimary">
      {label}
    </Typography>
  </Container>
)

export default PageLoader
