import React, { useState, useEffect } from "react";
import { UserModel } from "../../models/user";

const Otp = () => {
  const [timer, setTimer] = useState(60);
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
    const response = await UserModel.verifyOTP(otp);

    console.log(response);
  };

  const handleRefreshOTP = async () => {
    const response = await UserModel.refreshOTP();

    console.log(response);
    if (response.success) {
      setTimer(60);
      setRefresh(false);
      localStorage.setItem("token", response.token);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="otp"
        onChange={(e) => setOtp({ otp: e.target.value })}
        value={otp.otp}
      />
      <div className="p-10">{timer}</div>
      {refresh ? (
        <button onClick={handleRefreshOTP}>Gui lai</button>
      ) : (
        <button onClick={handleVerifyOTP}>Verify</button>
      )}
    </div>
  );
};

export default Otp;
