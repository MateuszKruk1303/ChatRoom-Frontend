import { Box, Grid, styled } from '@mui/material'

const MESSAGES_WRAPPER_HEIGHT = 600

const WRAPPER_HEIGHT = 740

export const MessagesWrapper = styled(Grid)(({ theme }) => ({
  overflow: 'scroll',
  padding: theme.spacing(3),
  margin: theme.spacing(3, 0),
  width: '100%',
  height: MESSAGES_WRAPPER_HEIGHT,
}))

export const TextAreaWrapper = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(2),
}))

export const Wrapper = styled(Box)({
  height: WRAPPER_HEIGHT,
})
