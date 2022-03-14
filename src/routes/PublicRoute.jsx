import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import RegisterPage from "../pages/register";
import VerifyOTP from "../pages/OTP";
import LoginPage from "../pages/login";
import ReqiureAuth from "../components/requireAuth";

export default function PublicRoute() {
  const elements = useRoutes([
    {
      path: "/",
      element: <ReqiureAuth />,
    },
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
    {
      path: "*",
      element: (
        <div>
          <Navigate to="/" />
        </div>
      ),
    },
  ]);

  return elements;
}
