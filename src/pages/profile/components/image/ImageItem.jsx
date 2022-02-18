import React from "react";
import { Popover } from "antd";

import "./ImageItem.scss";
import { Pencil } from "../../../../components/icons";

const ImageItem = ({ image }) => {
    return (
        <div className="profile-image-item">
            <div className="profile-image-image">
                <img src={image} alt="" />
            </div>
            <button className="profile-image-edit">
                <Popover
                    placement="bottomLeft"
                    content={
                        <div className="px-5 py-2 rounded-md font-semibold text-gray-600 cursor-pointer hover:bg-gray-200">
                            Thêm ảnh
                        </div>
                    }
                    trigger="click"
                >
                    <div className="profile-image-edit-icon">
                        <Pencil css="h-6 w-6" fil="white" />
                    </div>
                </Popover>
            </button>
        </div>
    );
};

export default ImageItem;
