import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import Chat from '../../components/Chat';

import { SocketContext } from '../../context/SocketContext';

const Room = () => {
  const { username, room } = useParams();
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('joinRoom', { username, room });
  }, [])

  return (
    <div>
      {`Hey ${username}, welcome to ${room}`}
      <Chat />
    </div>
  )
}

export default Room