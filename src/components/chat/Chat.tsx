import React from 'react'

import './chat.css'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='msg-list'>
        <div className='msg-container from-me'><span className='msg'>Сообщение</span></div>
        <div className='msg-container'><span className='msg'>Сообщение</span></div>
        <div className='msg-container'><span className='msg'>Сообщение</span></div>
      </div>
      <form>
        <input type='text' />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Chat