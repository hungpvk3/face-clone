import { useContext } from "react";
import { ProviderContext } from ".";

export const useStore = function () {
    const {
        isOpenEditProfile,
        setIsOpenEditProfile,
        isOpenChoseImage,
        setIsOpenChoseImage,
        avatar,
        setAvatar,
        isOpenUpdateAvatar,
        setIsOpenUpdateAvatar,
        avatarURL,
        setAvatarURL,
        isOpenBanner,
        setIsOpenBanner,
        isOpenEditDetail,
        setIsOpenEditDetail,
        storiesURL,
        setStoriesURL,
    } = useContext(ProviderContext);

    return {
        isOpenEditProfile,
        setIsOpenEditProfile,
        isOpenChoseImage,
        setIsOpenChoseImage,
        avatar,
        setAvatar,
        isOpenUpdateAvatar,
        setIsOpenUpdateAvatar,
        avatarURL,
        setAvatarURL,
        isOpenBanner,
        setIsOpenBanner,
        isOpenEditDetail,
        setIsOpenEditDetail,
        storiesURL,
        setStoriesURL,
    };
};
