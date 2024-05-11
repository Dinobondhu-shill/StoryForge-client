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
import BlogsDetails from './Pages/BlogsDetails';
import AddBlog from './Pages/AddBlog';
import Wishlist from './Pages/Wishlist';
import Update from './Pages/Update';

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
      },
      {
        path:"/all-blogs/:id",
        element:<BlogsDetails></BlogsDetails>,
        loader:({params})=> fetch(`http://localhost:5000/all-blogs/${params.id}`)
      },
      {
        path:"/add-blog",
        element:<AddBlog/>
      },
      {
        path:"/wishlist",
        element:<Wishlist></Wishlist>
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params})=> fetch(`http://localhost:5000/all-blogs/${params.id}`)
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
