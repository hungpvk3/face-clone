import React, { useEffect } from "react";

import { Plus } from "../../../../components/icons";
import { useStore } from "../../../../store";

const datas = [
    {
        id: 1,
        url: "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg",
    },
    {
        id: 2,
        url: "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg",
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
                            src="https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
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
