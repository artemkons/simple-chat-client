import React, { useEffect, useState } from "react";

import io from 'socket.io-client';

import Message from "../Message";

import "./chat.css";

const Chat = () => {
  const [msgs, setMsgs] = useState<string[]>([])
  const [msgTxt, setMsgTxt] = useState("");
  const [socket, setSocket] = useState<any>(null)

  useEffect(() => {
    const socket = io();
    setSocket(socket);

    socket.on('message', (msg) => { 
      setMsgs(msgs => [...msgs, msg]);
    });
  }, []);

  const onMsgTxtChange = (e: any) => {
    setMsgTxt(e.target.value);
  }

  const sendMsg = (e: any) => {
    e.preventDefault()
    socket.emit('chatMsg', msgTxt)
    setMsgTxt('')
  }

  return (
    <div className="chat">
      <div className="msg-list">
        {
          msgs.map((msg: string) => <Message text={msg} fromMe/>)
        }
      </div>
      <form onSubmit={sendMsg}>
        <input value={msgTxt} onChange={onMsgTxtChange} type="text" placeholder="Write a message..." />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
