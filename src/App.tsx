import React from 'react'
import Chat from './components/chat/Chat'

import io from 'socket.io-client';
const socket = io();

socket.on('message', console.log);

const App = () => {
  return (
    <Chat />
  )
}

export default App