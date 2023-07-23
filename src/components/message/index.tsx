import React from 'react'

import './message.css'

const Message = ({ text, fromMe = false }:{ text: string, fromMe?: boolean }) => {
  return (
    <div className={`msg-container${fromMe ? ' from-me' : ''}`}>
        <span className="msg">{text}</span>
    </div>
  )
}

export default Message