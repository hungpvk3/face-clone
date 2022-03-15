import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { UserModel } from "../../models/user";
import { useStore } from "../../store";

const ReqiureAuth = () => {
  const navigate = useNavigate();
  const {
    authState: { isAuthenticated },
    dispatchAuth,
  } = useStore();

  useEffect(() => {
    const loadAuth = async () => {
      const token = localStorage.getItem("token");
      const refreshToken = localStorage.getItem("refreshToken");

      if (token && refreshToken) {
        const response = await UserModel.getUser();
        console.log(response);
        // dispatchAuth({ type: "LOGIN_SUCCESS" });
        dispatchAuth({ type: "USER_ACCESS", payload: response.user });
        return true;
      } else {
        return false;
      }
    };

    loadAuth()
      .then((response) => {
        !response && navigate("/login");
      })
      .catch((err) => Promise.reject(err));
  }, [dispatchAuth, navigate]);

  return isAuthenticated && <Navigate to="/" />;
};

export default ReqiureAuth;
