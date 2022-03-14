import React from "react";
import { Popover } from "antd";

import { Dot } from "../../../../components/icons";

const FriendItem = () => {
    return (
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                    <img
                        className="w-full h-full object-cover"
                        src="https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
                        alt=""
                    />
                </div>
                <p className="m-0 text-lg font-semibold">Bảo Boss </p>
            </div>

            <button>
                <Popover
                    placement="rightTop"
                    content={
                        <div className="px-5 py-2 rounded-md font-semibold text-gray-600 cursor-pointer hover:bg-gray-200">
                            Huỷ kết bạn
                        </div>
                    }
                    trigger="click"
                    style={{ borderRadius: "12px", padding: "0" }}
                >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100">
                        <Dot css="h-5 w-5" />
                    </div>
                </Popover>
            </button>
        </div>
    );
};

export default FriendItem;
