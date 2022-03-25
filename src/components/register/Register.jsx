import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker, Input, Button } from "antd";

import { UserModel } from "../../models/user";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    DoB: "",
    password: "",
  });
  const { email, firstName, lastName, password } = userData;

  const handleChangeInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleChangeData = (date, dateString) => {
    setUserData({ ...userData, DoB: dateString });
  };

  const handleRegister = async () => {
    const response = await UserModel.register(userData);

    if (response.success) {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("email", email);
      navigate("/opt");
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center px-10">
      <div className="w-[500px] h-[500px] rounded-lg bg-white shadow flex flex-col items-center justify-center gap-6 px-6">
        <h2 className="-mt-10 text-2xl font-bold">Sign Up</h2>
        <div className="w-full flex items-center gap-3">
          <Input
            className="py-2 rounded-lg"
            placeholder="First name"
            name="firstName"
            onChange={handleChangeInput}
            value={firstName}
          />
          <Input
            className="py-2 rounded-lg"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChangeInput}
            value={lastName}
          />
        </div>
        <Input
          className="py-2 rounded-lg"
          placeholder="Enter your email"
          name="email"
          onChange={handleChangeInput}
          value={email}
        />
        <DatePicker
          className="w-full py-2 rounded-lg"
          onChange={handleChangeData}
        />
        <Input.Password
          className="py-2 rounded-lg"
          placeholder="Password"
          name="password"
          onChange={handleChangeInput}
          value={password}
        />

        <Button
          type="primary"
          className="h-10 bg-[#29b6f6] font-semibold w-full rounded-lg"
          onClick={handleRegister}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default Register;
