import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css';
 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import Job from './Root/Header/Job/Job';
import Aplied from './Root/Header/Job/Aplied/Aplied';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[

      {
        path:'/',
        element:<Home></Home>
      },

      {
        path:'/job',
        element:<Job></Job>,
      },
      {
        path:'/app',
        element:<Aplied></Aplied>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />  </React.StrictMode>,
)
