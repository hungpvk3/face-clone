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
                            src="data:image/jpeg;base64,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"
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
                            src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg"
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
