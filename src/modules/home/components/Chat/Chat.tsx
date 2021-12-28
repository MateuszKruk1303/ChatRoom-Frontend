import { Grid } from '@mui/material'
import { useChat } from './Chat.utils'
import UsersList from './UsersList'
import ChatWindow from './ChatWindow'
import { Wrapper } from './Chat.style'
import Placeholder from './Placeholder'

interface ChatProps {}

const Chat = ({}: ChatProps) => {
  const {
    id,
    getUserNameById,
    users,
    receiver,
    setReceiver,
    messages,
    areMessagesLoading,
    areUsersLoading,
  } = useChat()

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={9}>
          {receiver ? (
            <ChatWindow
              getUserNameById={getUserNameById}
              receiver={receiver}
              messages={messages}
              userId={id}
              isLoading={areMessagesLoading}
            />
          ) : (
            <Placeholder />
          )}
        </Grid>
        <Grid item xs={3}>
          <UsersList
            isLoading={areUsersLoading}
            userId={id}
            users={users}
            setReceiver={setReceiver}
          />
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Chat
