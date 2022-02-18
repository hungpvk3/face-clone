import React from "react";
import { Global } from "../../../../components/icons";
import Popover from "./Popover";

const GroupItem = () => {
    return (
        <div className="group-item relative flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3 cursor-pointer w-full">
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                    <img
                        className="w-full h-full object-cover"
                        src="https://thicc.mywaifulist.moe/waifus/15329/f0ec9195a2467403ed000d5ff955fd3f29e5a180d260d892c65a183efdea91e3_thumb.jpeg"
                        alt=""
                    />
                </div>
                <div>
                    <p
                        className="m-0 font-semibold leading-none"
                        style={{ fontSize: "17px" }}
                    >
                        HTML, CSS & JavaScript
                    </p>
                    <span className="text-gray-500 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                            <Global css="h-4 w-4" /> Nhóm công khai
                        </span>
                        <span className="text-xs">· {10} thành viên</span>
                    </span>
                </div>
            </div>
            <Popover />
        </div>
    );
};

export default GroupItem;
