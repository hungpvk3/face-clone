import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";

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
      localStorage.setItem("token", response.token);
      localStorage.setItem("email", email);
      navigate("/opt");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Phone or Email"
        name="email"
        onChange={handleChangeInput}
        value={email}
      />
      <input
        type="text"
        placeholder="first name"
        name="firstName"
        onChange={handleChangeInput}
        value={firstName}
      />
      <input
        type="text"
        placeholder="lastName"
        name="lastName"
        onChange={handleChangeInput}
        value={lastName}
      />
      <DatePicker onChange={handleChangeData} />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChangeInput}
        value={password}
      />

      <button onClick={handleRegister}>DDawng kis</button>
    </div>
  );
};

export default Register;
