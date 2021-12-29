import { Grid, Typography } from '@mui/material'
import { theme } from 'config'
import { MessageContainer, Wrapper } from './Message.style'

interface MessageProps {
  from: string | undefined
  text: string
  isYours: boolean
}

const Message = ({ from, text, isYours }: MessageProps) => {
  return (
    <Wrapper
      item
      container
      justifyContent={isYours ? 'flex-end' : 'flex-start'}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item alignSelf={isYours ? 'flex-end' : 'flex-start'}>
            <Typography>{from}</Typography>
          </Grid>
          <Grid item alignSelf={isYours ? 'flex-end' : 'flex-start'}>
            <MessageContainer theme={theme} isYours={isYours}>
              <Typography>{text}</Typography>
            </MessageContainer>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Message
