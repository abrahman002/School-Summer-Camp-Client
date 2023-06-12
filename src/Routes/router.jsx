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

import AllUsers from '../Page/DeshBoard/AllUsers/AllUsers';
import PrivetRoutes from './PrivetRoutes';
import InstractorAddClass from '../Page/DeshBoard/instractorAddClass/InstractorAddClass';
import InstractorClass from '../Page/DeshBoard/InstractorClass/InstractorClass';
import Updated from '../Page/DeshBoard/InstractorClass/Updated';
import MangeClass from '../Page/DeshBoard/MangeClass/MangeClass';
import StudentSeletClass from '../Page/DeshBoard/StudentSeletClass/StudentSeletClass';
import Payment from '../Page/DeshBoard/Payment/Payment';
import StudentEnrollClass from '../Page/DeshBoard/StudentEnrollClass/StudentEnrollClass';
import PaymentHistory from '../Page/DeshBoard/PaymentHistory/PaymentHistory';

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
          path:'alluser',
          element:<AllUsers></AllUsers>
        },{
          path:'instractoraddclass',
          element:<InstractorAddClass></InstractorAddClass>
        },
        {
          path:'instractorclass',
          element:<InstractorClass></InstractorClass>
        },
        {
          path:'update/:id',
          element:<Updated></Updated>,
          loader:({params})=>fetch(`http://localhost:5000/intractoraddclass/${params.id}`)
        },
        {
          path:'mangeclass',
          element:<MangeClass></MangeClass>
        },
        {
          path:'studentselectclass',
          element:<StudentSeletClass></StudentSeletClass>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },{
          path:'studentenrollclass',
          element:<StudentEnrollClass></StudentEnrollClass>
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);
  

export default router;