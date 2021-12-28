import { Grid, Typography } from '@mui/material'
import { MessageContainer, Wrapper } from './Message.style'
import { theme } from 'config'

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
          <Grid item>
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
