import React from 'react'
import { useParams } from 'react-router-dom'

const Rooms = () => {
  const { username, room } = useParams();

  return (
    <div>{`Hey ${username}, welcome to ${room}`}</div>
  )
}

export default Rooms