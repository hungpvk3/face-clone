import axios from "axios";

import { UserModel } from "../../models/user";

const instance = axios.create({
  baseURL: "https://titi-server.herokuapp.com/api",
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // Refresh token when token expries
    
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshTokenRes = await UserModel.refreshToken();
      
      if (refreshTokenRes.success) {
        instance.defaults.headers.common["Authorization"] =
          "Bearer " + refreshTokenRes.refreshToken;
        localStorage.setItem("token", refreshTokenRes.accessToken);
        return instance(originalRequest);
      } else {
        instance.defaults.headers.common["Authorization"] = "Bearer " + null;
        localStorage.removeItem("refreshToken");
      }
    }

    if (error.response) {
      return error.response;
    }

    return Promise.reject(error);
  }
);

export default instance;
