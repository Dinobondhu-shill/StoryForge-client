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
import FeaturedBlog from './Pages/FeaturedBlog';
import PrivateRoute from './Pages/PrivateRoute';




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
        element:<PrivateRoute><AddBlog/></PrivateRoute>
      },
      {
        path:"/wishlist",
        element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/all-blogs/${params.id}`)
      },
      {
        path:"/featured-blog",
        element:<FeaturedBlog></FeaturedBlog>,
        
      }
    ]
  },
]);

// Create a client


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
    
  </React.StrictMode>,
)
