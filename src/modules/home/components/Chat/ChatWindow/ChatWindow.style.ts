import { Grid, styled } from '@mui/material'

export const MessagesWrapper = styled(Grid)(({ theme }) => ({
  height: 630,
  overflow: 'scroll',
  padding: theme.spacing(3),
  margin: theme.spacing(3, 0),
  width: '100%',
}))

export const TextAreaWrapper = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(2),
}))
