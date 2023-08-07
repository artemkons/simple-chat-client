import React from 'react'
import { createRoot } from 'react-dom/client';

import './index.css'

import io from 'socket.io-client';
import { SocketContext } from './context/SocketContext';

import App from './App'

const container = document.getElementById('app');
const root = createRoot(container!);

const socket = io();

root.render(
  <SocketContext.Provider value={socket}>
    <App />
  </SocketContext.Provider>
);