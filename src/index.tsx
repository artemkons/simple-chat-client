import React from 'react'
import { createRoot } from 'react-dom/client';

import io from 'socket.io-client';
const socket = io();

socket.on('message', console.log);

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<h1>Hello wolrd</h1>);