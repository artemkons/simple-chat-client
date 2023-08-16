import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Message from "../Message";
import Input from "../Input";
import Button from "../Button";

import { SocketContext } from "../../context/SocketContext";

import "./chat.css";

interface User {
  id: string;
  username: string;
  room: string;
}

interface Message {
  user: User;
  msg: string;
}

const Chat = () => {
  const [msgs, setMsgs] = useState<Message[]>([])
  const [msgTxt, setMsgTxt] = useState("")

  const { username } = useParams();

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("message", ({ user, msg }: { user: User; msg: string }) => {
      const message = { user, msg };
      setMsgs((msgs) => [...msgs, message]);
    });
  }, []);

  const onMsgTxtChange = (e: any) => {
    setMsgTxt(e.target.value);
  };

  const sendMsg = (e: any) => {
    e.preventDefault();
    socket.emit("chatMsg", msgTxt);
    setMsgTxt("");
  };

  return (
    <div className="chat">
      <div className="msg-list">
        {msgs.map(({ user, msg }) => (
          <Message text={msg} fromMe={user?.username === username} />
        ))}
      </div>
      <form onSubmit={sendMsg}>
        <Input
          value={msgTxt}
          onChange={onMsgTxtChange}
          type="text"
          placeholder="Write a message..."
        />
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default Chat;
