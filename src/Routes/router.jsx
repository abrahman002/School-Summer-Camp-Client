import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Page/Home/Home/Home';
import ErrrorPage from '../Page/ErrorPage/ErrrorPage';
import Login from '../Page/LogInPage/Login';
import SignUp from '../Page/SignUpPage/SignUp';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrrorPage></ErrrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);
  

export default router;