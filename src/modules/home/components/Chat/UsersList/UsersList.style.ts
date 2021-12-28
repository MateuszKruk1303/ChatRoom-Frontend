import { Grid, styled } from '@mui/material'

export const Wrapper = styled(Grid)(({ theme }) => ({
  height: '100%',
  '& > div:first-child': {
    margin: theme.spacing(3, 0),
  },
}))

export const UserContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(2),
  borderRadius: 12,
  width: '90%',
  margin: theme.spacing(2),
}))
