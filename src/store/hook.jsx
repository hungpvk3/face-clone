import { useContext } from "react";
import ProviderContext from "./ContextClient";

export const useStore = () => {
  const {
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
  } = useContext(ProviderContext);

  return {
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
};
