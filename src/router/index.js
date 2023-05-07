import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Booking from "../pages/BookingTicket/Booking";
import RegisterBg from "../pages/RegisterBg";
import Detail from "../pages/Detail";
import News from "../pages/News";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckOut from "../modules/CheckOut";

const Router = (props) => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/moviedetail/:id",
          element: <Detail/>,
        },
        {
          path: "/booking/:id",
          element: <Booking />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/news",
          element: <News/>,
        },
        {
          path:"/booking",
          element:<Booking/>
        },
        {
          path: '/checkout/:id',
          element: <CheckOut/>
        }
    
      ],
    },
  ]);
  return element;
};

export default Router;
