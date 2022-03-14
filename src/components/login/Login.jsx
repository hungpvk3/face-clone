import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserModel } from "../../models/user";
import { useStore } from "../../store";

const Login = () => {
  const navigate = useNavigate();
  const { dispatchAuth } = useStore();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await UserModel.login(userData);

    if (!response.success) {
      navigate("/opt");
      localStorage.setItem("email", userData.email);
      await UserModel.refreshOTP();
    }

    if (response.success) {
      navigate("/");
      localStorage.setItem("token", response.token);
      localStorage.setItem("refreshToken", response.refreshToken);
      dispatchAuth({ type: "LOGIN_SUCCESS" });
    }
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChangeInput}
        value={userData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChangeInput}
        value={userData.password}
      />
      <button onClick={handleSubmit}>DDanwg nhapj</button>
    </div>
  );
};

export default Login;
