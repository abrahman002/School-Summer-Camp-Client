import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Page/Home/Home/Home';
import ErrrorPage from '../Page/ErrorPage/ErrrorPage';
import Login from '../Page/LogInPage/Login';
import SignUp from '../Page/SignUpPage/SignUp';
import Instructor from '../Page/Instructor/Instructor';
import Class from '../Page/Class/Class';
import DeshBoard from '../Layout/DeshBoard';
import MyCart from '../Page/DeshBoard/MyCart/MyCart';
import AllUsers from '../Page/DeshBoard/AllUsers/AllUsers';
import PrivetRoutes from './PrivetRoutes';
import InstractorAddClass from '../Page/DeshBoard/instractorAddClass/InstractorAddClass';
import InstractorClass from '../Page/DeshBoard/InstractorClass/InstractorClass';

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
          path:'/instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'/class',
          element:<Class></Class>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'deshboard',
      element:<PrivetRoutes><DeshBoard></DeshBoard></PrivetRoutes>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },{
          path:'alluser',
          element:<AllUsers></AllUsers>
        },{
          path:'instractoraddclass',
          element:<InstractorAddClass></InstractorAddClass>
        },
        {
          path:'instractorclass',
          element:<InstractorClass></InstractorClass>
        }
      ]
    }
  ]);
  

export default router;