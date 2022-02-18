import React from "react";
import { Global, Group } from "../../../../components/icons";

const Popover = () => {
    return (
        <div
            className="popover absolute bottom-20 left-28 bg-white z-10 rounded shadow-lg p-3"
            style={{ maxWidth: "600px" }}
        >
            <div className="flex gap-4">
                <div className="w-24 h-24 overflow-hidden rounded-md">
                    <img
                        src="https://thicc.mywaifulist.moe/waifus/15329/f0ec9195a2467403ed000d5ff955fd3f29e5a180d260d892c65a183efdea91e3_thumb.jpeg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-xl font-bold">
                        HTML, CSS & JavaScript
                    </h1>
                    <div className="flex items-center gap-2">
                        <Global css="h-5 w-5 text-gray-500" />
                        <span>Nhóm công khai</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <Group css="text-gray-500" />
                        <span>348,1K thành viên</span>
                    </div>
                </div>
            </div>

            <div>
                <button
                    className="w-full py-2 text-center text-blue-500 font-semibold bg-blue-100 rounded-md mt-12"
                    style={{ fontSize: "15px" }}
                >
                    Truy cập vào nhóm
                </button>
            </div>
        </div>
    );
};

export default Popover;
