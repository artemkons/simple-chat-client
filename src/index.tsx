import React from 'react'
import { createRoot } from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './App';
import Rooms from './pages/Rooms';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    }, {
      path: "/rooms/:username/:room",
      element: <Rooms />
    }
  ]);

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<RouterProvider router={router} />);