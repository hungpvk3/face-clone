import React, { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

import "./Login.style.scss";
import { UserModel } from "../../models/user";
import { useStore } from "../../store";

const Login = () => {
  const navigate = useNavigate();
  const { dispatchAuth } = useStore();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await UserModel.login(userData);

    if (response.success) {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("id", response.data._id);
      navigate("/");
      setLoading(false);
      dispatchAuth({ type: "LOGIN_SUCCESS" });
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center px-10">
      <div className="w-[500px] h-[400px] px-6 sm:px-16 bg-white flex flex-col items-center justify-center gap-6 rounded-lg shadow">
        <h2 className="-mt-10 text-xl font-bold">Sign In</h2>
        <Input
          className="py-2 rounded-lg"
          name="email"
          placeholder="Email"
          onChange={handleChangeInput}
          value={userData.email}
        />
        <Input.Password
          className="py-2 rounded-lg"
          name="password"
          placeholder="Password"
          onChange={handleChangeInput}
          value={userData.password}
        />
        <Button
          type="primary"
          className="h-10 bg-[#29b6f6] font-semibold w-full rounded-lg"
          loading={loading}
          onClick={handleSubmit}
        >
          Đăng nhập
        </Button>
        <p className="">
          Bạn chưa có tài khoản
          <span className="text-blue-500 font-semibold ml-2 cursor-pointer hover:underline">
            Đăng kí
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
