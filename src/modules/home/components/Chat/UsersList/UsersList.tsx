import { Button, Grid, Typography } from '@mui/material'
import { PageLoader } from 'shared/components'
import { User } from 'shared/types'
import { ActiveUser } from '../../../types'
import { Wrapper, UserContainer } from './UsersList.style'
import Status from './Status'

interface UsersListProps {
  users: User[]
  userId: number
  isLoading: boolean
  setReceiver: (id: number | null) => void
  activeUsers: ActiveUser[]
}

const UsersList = ({
  userId,
  users,
  setReceiver,
  isLoading,
  activeUsers,
}: UsersListProps) => {
  return (
    <Wrapper>
      <Grid container justifyContent="center">
        <Typography variant="h5">Select user</Typography>
      </Grid>
      {isLoading ? (
        <PageLoader />
      ) : (
        users.map(
          ({ name, id }) =>
            userId !== id && (
              <UserContainer
                item
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid item container justifyContent="center" xs={12}>
                  <Typography>{name}</Typography>
                  <Status
                    isOnline={!!activeUsers.find(item => item.userId === id)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={() => setReceiver(id)}>
                    Chat
                  </Button>
                </Grid>
              </UserContainer>
            )
        )
      )}
    </Wrapper>
  )
}

export default UsersList
