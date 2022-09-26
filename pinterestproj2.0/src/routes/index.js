import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import authRoutes from "./auth.routes";

  const router = createBrowserRouter([...authRoutes])

  const PinprojRouterProvider = () =>{
    return <RouterProvider router ={router} />
  }

  export default PinprojRouterProvider;