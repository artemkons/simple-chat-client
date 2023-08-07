import React from "react"

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"

import Auth from './pages/Auth'
import Room from './pages/Room'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    }, {
      path: "/room/:username/:room",
      element: <Room />
    }
  ]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
