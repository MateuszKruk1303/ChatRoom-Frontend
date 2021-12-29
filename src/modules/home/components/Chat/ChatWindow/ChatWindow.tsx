import { Button, TextField } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { PageLoader } from 'shared/components'
import { socket, messages as socketMessages } from '../../../socket'
import { ActiveUser, Message as MessageType } from '../../../types'
import Message from './Message'
import { MessagesWrapper, TextAreaWrapper, Wrapper } from './ChatWindow.style'

const ENTER_KEY_CODE = 'Enter'
interface ChatWindowProps {
  getUserNameById: (id: number) => string | undefined
  receiver: number | null
  messages: MessageType[]
  userId: number
  isLoading: boolean
  activeUsers: ActiveUser[]
}

const ChatWindow = ({
  getUserNameById,
  receiver,
  messages,
  userId,
  isLoading,
  activeUsers,
}: ChatWindowProps) => {
  const endRef = useRef<HTMLDivElement | null>(null)

  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    const yourSocketId = activeUsers.find(
      item => item.userId === userId
    )!.socketId

    const receiverSocketId = activeUsers.find(
      item => item.userId === receiver
    )?.socketId

    if (socket && message)
      socket.emit(socketMessages.message, {
        fromId: userId,
        toId: receiver,
        text: message,
        toSocketId: receiverSocketId || undefined,
        fromSocketId: yourSocketId,
      })
    setMessage('')
  }

  const onEnterKey = (e: any) => {
    if (e.code === ENTER_KEY_CODE) {
      handleSendMessage()
      e.preventDefault()
    }
  }

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [receiver, messages])

  return (
    <Wrapper>
      <MessagesWrapper>
        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            {messages &&
              messages.map(({ text, fromId }) => (
                <Message
                  from={getUserNameById(fromId)}
                  text={text}
                  isYours={fromId === userId}
                />
              ))}
            <div ref={endRef} />
          </>
        )}
      </MessagesWrapper>
      <TextAreaWrapper>
        <TextField
          multiline
          rows={2}
          maxRows={10}
          disabled={!receiver}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={`Send message to ${
            receiver ? getUserNameById(receiver as number) : ''
          }`}
          onKeyDown={e => onEnterKey(e)}
        />
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>
      </TextAreaWrapper>
    </Wrapper>
  )
}

export default ChatWindow
