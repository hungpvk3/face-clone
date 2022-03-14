import { AxiosClient } from "../../helpers/axios";

const UserModel = {
  register: async formData => {
    const response = await AxiosClient.post("/users", formData);

    return response;
  },
  verifyOTP: async codeOTP => {
    const response = await AxiosClient.patch("/OTP", codeOTP);

    return response;
  },
  refreshOTP: async () => {
    const response = await AxiosClient.patch("/create/otp", {
      email: localStorage.getItem("email"),
    });

    return response;
  },
  refreshToken: async () => {
    const response = await AxiosClient.post("/refreshToken", {
      refreshToken: localStorage.getItem("refreshToken"),
      userId: "622d7ba1620ff07c4f987a34",
    });

    return response;
  },
  login: async formData => {
    const response = await AxiosClient.post("/login", formData);

    return response;
  },
  getUser: async () => {
    const response = await AxiosClient.get("/me");

    return response;
  },
};

export default UserModel;
