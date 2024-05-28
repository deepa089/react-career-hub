import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
      path: "/",
      element: <div>Root Element</div>,
      // errorElement: <ErrorPage></ErrorPage>,
      children: [
          {
              path: "/",
              element: <div>This is Root Element</div>,
          },
          //   {
          //     path: "/donations",
          //     element: <Donations></Donations>,
          //     loader: () => fetch("/donation.json"),
          //   },
          //   {
          //     path: '/update/:id',
          //     element: <Update></Update>,
          //     loader: ({params}) => fetch('http://localhost:5000/users/$ {params.id}')
          //   },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
