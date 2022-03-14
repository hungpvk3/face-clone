import React from "react";
import { useRoutes } from "react-router-dom";
import RegisterPage from "../pages/register";
import VerifyOTP from "../pages/OTP";
import LoginPage from "../pages/login";

export default function PublicRoute() {
  const elements = useRoutes([
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/opt",
      element: <VerifyOTP />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return elements;
}
