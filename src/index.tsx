import React from 'react'
import { createRoot } from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './App';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    }, 
  ]);

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<RouterProvider router={router} />);