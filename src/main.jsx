import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/homePage/Home';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FirebaseProvider from './firebase/FirebaseProvider';
import AllBlogs from './Pages/AllBlogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/all-blogs",
        element:<AllBlogs></AllBlogs>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
