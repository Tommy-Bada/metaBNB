import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PlaceToStay from './place-to-stay';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/place-to-stay",
    element: <PlaceToStay />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
