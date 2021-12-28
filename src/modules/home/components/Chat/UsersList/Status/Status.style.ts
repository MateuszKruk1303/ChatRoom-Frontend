import { Grid, styled, Theme } from '@mui/material'

const DOT_SIZE = 10

export const Wrapper = styled(Grid)({})

export const Dot = styled('div')(
  ({ theme, isOnline }: { theme: Theme; isOnline: boolean }) => ({
    borderRadius: 50,
    width: DOT_SIZE,
    height: DOT_SIZE,
    backgroundColor: isOnline
      ? theme.palette.success.main
      : theme.palette.error.main,
  })
)
