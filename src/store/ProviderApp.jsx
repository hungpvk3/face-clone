import React, { useReducer, useState } from "react";

import authReducer, { initialAuth } from "./reducers/authReducer";
import ProviderContext from "./ContextClient";

const ProviderApp = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuth);
  const [isOpenEditProfile, setIsOpenEditProfile] = useState();
  const [isOpenChoseImage, setIsOpenChoseImage] = useState();
  const [isOpenUpdateAvatar, setIsOpenUpdateAvatar] = useState();
  const [avatar, setAvatar] = useState();
  const [isOpenBanner, setIsOpenBanner] = useState();
  const [isOpenEditDetail, setIsOpenEditDetail] = useState();
  console.log(authState);
  const providerAppData = {
    authState,
    dispatchAuth,
    isOpenEditProfile,
    setIsOpenEditProfile,
    isOpenChoseImage,
    setIsOpenChoseImage,
    isOpenUpdateAvatar,
    setIsOpenUpdateAvatar,
    avatar,
    setAvatar,
    isOpenBanner,
    setIsOpenBanner,
    isOpenEditDetail,
    setIsOpenEditDetail,
  };

  return (
    <ProviderContext.Provider value={providerAppData}>
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderApp;
