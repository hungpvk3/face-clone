import React from "react";

import { Avatar } from "../../icons";

const MesgerItem = ({ avatar }) => {
    return (
        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md">
            <Avatar
                avatar={avatar}
                css="h-12 w-12"
                cssActive="bottom-0 right-0.5"
            />
            <div className="">
                <span
                    style={{
                        fontFamily: "Segoe UI",
                        fontWeight: "400",
                        fontSize: "15px",
                    }}
                    className="text-gray-500"
                >
                    Nguyễn Mạnh Công
                </span>
            </div>
        </div>
    );
};

export default MesgerItem;
