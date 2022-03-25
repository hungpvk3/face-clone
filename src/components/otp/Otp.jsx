import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { UserModel } from "../../models/user";

const Otp = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [otp, setOtp] = useState({
    otp: "",
  });

  useEffect(() => {
    const timerRef = setInterval(() => {
      setTimer((preTimer) => preTimer - 1);
    }, 1000);

    if (timer < 1) {
      clearInterval(timerRef);
      setRefresh(true);
    }

    return () => clearInterval(timerRef);
  }, [timer]);

  const handleVerifyOTP = async () => {
    setLoading(true);
    const response = await UserModel.verifyOTP(otp);

    if (response.success) {
      localStorage.setItem("", response.Res);
      localStorage.setItem("userId", response.data._id);
      setLoading(false);
      navigate("/");
    }
  };

  const handleRefreshOTP = async () => {
    setLoading(true);
    const response = await UserModel.refreshOTP();

    console.log(response);
    if (response.success) {
      localStorage.setItem("token", response.accessToken);
      setTimer(60);
      setRefresh(false);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[500px] h-[400px] bg-white rounded-lg shadow flex flex-col items-center justify-center gap-6 px-10">
        <h2 className="-mt-10 mb-3 text-2xl font-bold">
          Authenticate your accout
        </h2>
        <p>
          Verify OTP in your email <span>hungpvwebdev@gmail.com</span>
        </p>
        <div className="w-full flex items-center gap-3 rounded-lg border overflow-hidden px-3 hover:border-[#29b6f6]">
          <input
            className="py-2 w-full outline-none"
            type="text"
            name="otp"
            onChange={(e) => setOtp({ otp: e.target.value })}
            value={otp.otp}
          />
          <div className="">{timer}</div>
        </div>
        {refresh ? (
          <Button
            type="primary"
            className="h-10 bg-[#29b6f6] font-semibold w-full rounded-lg"
            loading={loading}
            onClick={handleRefreshOTP}
          >
            Gui lai
          </Button>
        ) : (
          <Button
            type="primary"
            className="h-10 bg-[#29b6f6] font-semibold w-full rounded-lg"
            loading={loading}
            onClick={handleVerifyOTP}
          >
            Verify
          </Button>
        )}
      </div>
    </div>
  );
};

export default Otp;
