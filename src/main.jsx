import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
          {
              path: "/",
              element: <Home></Home>,
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
