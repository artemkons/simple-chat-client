import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import Chat from '../../components/Chat'

import { SocketContext } from '../../context/SocketContext'

interface User {
  id: string
  username: string
  room: string
}

const Room = () => {
  const { username, room } = useParams()
  const [roomUsers, setRoomUsers] = useState<User[]>([]);

  const socket = useContext(SocketContext)

  useEffect(() => {
    socket.emit('joinRoom', { username, room })
    socket.on('enteredToRoom', ({ room, users }: { room: string, users: User[] }) => {
      setRoomUsers(users);
    })
  }, [])

  return (
    <div>
      <ul>
        {roomUsers.map((user) => <li>{user.username}</li>)}
      </ul>
      {`Hey ${username}, welcome to ${room}`}
      <Chat />
    </div>
  )
}

export default Room