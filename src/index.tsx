import React from 'react'
import { createRoot } from 'react-dom/client';

import io from 'socket.io-client';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './App';
import Room from './pages/Room';

import { SocketContext } from './context/SocketContext';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    }, {
      path: "/room/:username/:room",
      element: <Room />
    }
  ]);

const container = document.getElementById('app');
const root = createRoot(container!);

const socket = io();

root.render(
  <SocketContext.Provider value={socket}>
    <RouterProvider router={router} />
  </SocketContext.Provider>
);