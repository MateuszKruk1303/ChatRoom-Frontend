import { Card, styled } from '@mui/material'

const WRAPPER_HEIGHT = 800
const WRAPPER_WIDTH = 1200

export const Wrapper = styled(Card)({
  minWidth: WRAPPER_WIDTH,
  maxHeight: WRAPPER_HEIGHT,
})
