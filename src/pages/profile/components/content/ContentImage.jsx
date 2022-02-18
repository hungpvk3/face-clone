import React, { useEffect } from "react";

import { Plus } from "../../../../components/icons";
import { useStore } from "../../../../store";

const datas = [
    {
        id: 1,
        url: "https://i.pinimg.com/originals/e4/1d/7b/e41d7b1ec4c107a2df219b24e3e7eda4.png",
    },
    {
        id: 2,
        url: "https://i.pinimg.com/474x/30/75/3a/30753ab5fe7729f5fafa08745d800473.jpg",
    },
];

const ContentAvatar = () => {
    const {
        setAvatar,
        avatarURL,
        setAvatarURL,
        isOpenChoseImage,
        setIsOpenUpdateAvatar,
    } = useStore();

    const handleSetAvatar = (url) => {
        setAvatar(url);
        setIsOpenUpdateAvatar(true);
    };
    console.log(avatarURL);
    useEffect(() => {
        return () => {
            console.log("remove", avatarURL);
            avatarURL && URL.revokeObjectURL(avatarURL);
        };
    }, [avatarURL, isOpenChoseImage]);

    return (
        <div>
            <label
                htmlFor="upload"
                className="flex items-center justify-center gap-1 bg-blue-100 rounded py-2 cursor-pointer hover:bg-blue-200"
            >
                <Plus css="h-4 w-4 text-blue-500" />
                <input
                    type="file"
                    id="upload"
                    className="hidden"
                    onChange={(e) => {
                        setAvatarURL(URL.createObjectURL(e.target.files[0]));
                    }}
                />
                <p className="m-0 font-semibold text-blue-500 cursor-pointer">
                    Tải ảnh lên
                </p>
            </label>
            <div className="mt-4">
                <p className="text-lg font-semibold">Ảnh tải lên</p>
                <div className="grid grid-cols-5">
                    {datas.map((data) => (
                        <div
                            className="h-28 w-28 rounded overflow-hidden"
                            key={data.id}
                            onClick={() => handleSetAvatar(data.url)}
                        >
                            <img
                                src={data.url}
                                alt=""
                                className="w-full h-full object-cover cursor-pointer hover:opacity-90"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <p className="text-lg font-semibold">Ảnh đại diện</p>
                <div className="grid grid-cols-5">
                    <div className="h-28 w-28 rounded overflow-hidden">
                        <img
                            src={avatarURL}
                            alt=""
                            className="w-full h-full object-cover cursor-pointer hover:opacity-90"
                        />
                    </div>
                    <div className="h-28 w-28 rounded overflow-hidden">
                        <img
                            src="https://i.pinimg.com/474x/30/75/3a/30753ab5fe7729f5fafa08745d800473.jpg"
                            alt=""
                            className="w-full h-full object-cover cursor-pointer hover:opacity-90"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentAvatar;
