import { HTMLAttributes } from 'react'
import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  padding: theme.spacing(3),
}))

export interface ContentProps extends Partial<HTMLAttributes<HTMLDivElement>> {
  shrink?: boolean
}
