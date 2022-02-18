import React from "react";

import { Image, Upload } from "../../../../components/icons";
import { useStore } from "../../../../store";

const ContentBanner = () => {
    const { setIsOpenChoseImage } = useStore();

    return (
        <div>
            <div
                className="flex items-center gap-3 rounded-md cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => setIsOpenChoseImage(true)}
            >
                <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center">
                    <Image css="h-6 w-6" />
                </div>
                <p className="m-0 text-lg font-semibold">Chọn ảnh</p>
            </div>
            <div className="flex items-center mt-6 gap-3 rounded-md cursor-pointer hover:bg-gray-100 p-2">
                <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center">
                    <Upload css="h-7 w-7" />
                </div>
                <p className="m-0 text-lg font-semibold">Tải ảnh lên</p>
            </div>
        </div>
    );
};

export default ContentBanner;
