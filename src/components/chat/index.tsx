import React, { useContext, useEffect, useState } from "react";

import Message from "../Message";

import { SocketContext } from "../../context/SocketContext";

import "./chat.css";

const Chat = () => {
  const [msgs, setMsgs] = useState<string[]>([])
  const [msgTxt, setMsgTxt] = useState("")

  const socket = useContext(SocketContext)

  useEffect(() => {
    socket.on('message', (msg: string) => { 
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
