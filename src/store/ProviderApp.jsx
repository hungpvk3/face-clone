import React, { useState } from "react";

import ProviderContext from "./Context";

const Provider = ({ children }) => {
    const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);
    const [isOpenChoseImage, setIsOpenChoseImage] = useState(false);
    const [isOpenUpdateAvatar, setIsOpenUpdateAvatar] = useState(false);
    const [isOpenEditDetail, setIsOpenEditDetail] = useState(false);
    const [isOpenBanner, setIsOpenBanner] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [storiesURL, setStoriesURL] = useState({
        storiesImage: "",
        storiesText: "",
    });
    const [avatarURL, setAvatarURL] = useState("");

    return (
        <ProviderContext.Provider
            value={{
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
            }}
        >
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;
