import { Box, Button, TextField } from '@mui/material'
import { selectors } from 'modules/home/store'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { PageLoader } from 'shared/components'
import { socket } from '../../../socket'
import { Message as MessageType } from '../../../types'
import { MessagesWrapper, TextAreaWrapper } from './ChatWindow.style'
import Message from './Message'

interface ChatWindowProps {
  getUserNameById: (id: number) => string | undefined
  receiver: number | null
  messages: MessageType[]
  userId: number
  isLoading: boolean
}

const ChatWindow = ({
  getUserNameById,
  receiver,
  messages,
  userId,
  isLoading,
}: ChatWindowProps) => {
  const [message, setMessage] = useState('')
  const endRef = useRef<HTMLDivElement | null>(null)
  const activeUsers = useSelector(selectors.getActiveUsers)

  const handleSendMessage = () => {
    const yourSocketId = activeUsers.find(
      item => item.userId === userId
    )!.socketId
    const receiverSocketId = activeUsers.find(
      item => item.userId === receiver
    )!.socketId

    if (socket && message)
      socket.emit('message', {
        fromId: userId,
        toId: receiver,
        text: message,
        toSocketId: receiverSocketId,
        fromSocketId: yourSocketId,
      })
    setMessage('')
  }

  const onEnterKey = (e: any) => {
    if (e.code === 'Enter') {
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
    <Box>
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
    </Box>
  )
}

export default ChatWindow
