import { useContext } from "react";
import ProviderContext from "./ContextClient";

export const useStore = () => {
  const {
    authState,
    dispatchAuth,
    storiesURL,
    setStoriesURL,
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
    storiesURL,
    setStoriesURL,
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
