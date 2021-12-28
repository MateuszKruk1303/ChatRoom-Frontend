import { Button, Grid, Typography } from '@mui/material'
import { PageLoader } from 'shared/components'
import { User } from 'shared/types'
import { Wrapper, UserContainer } from './UsersList.style'
import { useSelector } from 'react-redux'
import { selectors } from 'modules/home/store'
import Status from './Status'

interface ActiveUsersProps {
  users: User[]
  userId: number
  isLoading: boolean
  setReceiver: (id: number | null) => void
}

const UsersList = ({
  userId,
  users,
  setReceiver,
  isLoading,
}: ActiveUsersProps) => {
  const activeUsers = useSelector(selectors.getActiveUsers)

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
