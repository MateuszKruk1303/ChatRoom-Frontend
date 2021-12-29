import { Grid, styled } from '@mui/material'
import { Theme } from '@mui/material/styles'

interface MessageContainerProps {
  isYours: boolean
  theme: Theme
}

export const MessageContainer = styled('div')(
  ({ theme, isYours }: MessageContainerProps) => ({
    backgroundColor: isYours
      ? theme.palette.primary.main
      : theme.palette.error.main,
    borderRadius: 20,
    padding: theme.spacing(1, 2),
    color: theme.palette.common.white,
    width: 'max-content',
    marginTop: theme.spacing(0.5),
  })
)

export const Wrapper = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))
