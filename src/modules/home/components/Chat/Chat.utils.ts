import { actions, selectors } from 'modules/home/store'
import { getAllMessages } from 'modules/home/store/actions'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectChatServer, disconnect } from '../../socket'
import { getCurrentUser } from 'shared/store/auth/selectors'
import { Auth } from 'shared/services'
import { LoadingStatus } from 'shared/types'

export const useChat = () => {
  const dispatch = useDispatch()

  const [receiver, setReceiver] = useState<number | null>(null)

  const { data: messages, loading: messagesLoading } = useSelector(
    selectors.getMessages
  )
  const activeUsers = useSelector(selectors.getActiveUsers)
  const { id } = useSelector(getCurrentUser)
  const { data: users, loading: usersLoading } = useSelector(
    selectors.getAllUsers
  )

  const accessToken = useMemo(() => Auth.getTokensInfo().accessToken, [])
  const areMessagesLoading = messagesLoading === LoadingStatus.Pending
  const areUsersLoading = usersLoading === LoadingStatus.Pending

  useEffect(() => {
    connectChatServer(id, dispatch, accessToken)
    dispatch(actions.getAllUsers())
    return () => {
      disconnect()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (receiver) dispatch(getAllMessages({ fromId: id, toId: receiver }))
    // eslint-disable-next-line
  }, [receiver])

  const getUserNameById = (id: number) =>
    users.find(item => item.id === id)?.name

  return {
    id,
    getUserNameById,
    users,
    receiver,
    setReceiver,
    messages,
    areMessagesLoading,
    areUsersLoading,
    activeUsers,
  }
}
