import React from "react";

import History from "../thumbnail/History";
import Intro from "../intro";
import { useStore } from "../../../../store";

const ContentInfo = ({ isOpenHistory, onCloseHistory, onOpenHistory }) => {
    const { setIsOpenChoseImage, setIsOpenBanner } = useStore();

    const handleOpenEditProfileAvatar = () => {
        setIsOpenChoseImage(true);
    };
    const handleOpenBanner = () => {
        setIsOpenBanner(true);
    };

    return (
        <div>
            <div className="flex flex-col gap-6 mt-3">
                <div className="">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Ảnh đại diện</h2>
                        <button
                            className="py-2 px-3 text-blue-500 text-lg hover:bg-gray-100 rounded"
                            onClick={handleOpenEditProfileAvatar}
                        >
                            Thêm
                        </button>
                    </div>
                    <div className="h-40 w-40 rounded-full mx-auto">
                        <img
                            src="https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
                            alt=""
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Ảnh bìa</h2>
                        <button
                            className="py-2 px-3 text-blue-500 text-lg hover:bg-gray-100 rounded"
                            onClick={handleOpenBanner}
                        >
                            Thêm
                        </button>
                    </div>
                    <div
                        className="h-48 rounded-md mx-auto"
                        style={{ width: "480px" }}
                    >
                        <img
                            src="https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
                            alt=""
                            className="w-full h-full rounded-md object-cover"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Tiểu sử</h2>
                        <button
                            className="py-2 px-3 text-blue-500 text-lg hover:bg-gray-100 rounded"
                            onClick={onOpenHistory}
                        >
                            Thêm
                        </button>
                    </div>
                    <div className="">
                        {isOpenHistory ? (
                            <History onClose={onCloseHistory} />
                        ) : (
                            <p className="text-center text-lg text-gray-500">
                                Mô tả bản thân...
                            </p>
                        )}
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">
                            Chỉnh sửa phần giới thiệu
                        </h2>
                        <button className="py-2 px-3 text-blue-500 text-lg hover:bg-gray-100 rounded">
                            Thêm
                        </button>
                    </div>
                    <div>
                        <Intro />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentInfo;
