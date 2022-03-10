import React from "react";
import { Link } from "react-router-dom";

import { Setting, Book, Plus } from "../../../../components/icons";

const NavigateMain = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center px-4 pt-4">
                <h2 className="text-2xl font-bold m-0">Tin</h2>
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                    <Setting css="w-6 h-6" />
                </div>
            </div>

            <div className="flex items-center gap-3 p-1.5 bg-blue-50 rounded-md mt-4 mb-2.5 mx-2">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Book css="stroke-blue-500 fill-white h-8 w-8" />
                </div>
                <h2 className="m-0" style={{ fontSize: "16px" }}>
                    Lướt xem tất cả
                </h2>
            </div>

            <div className="py-2.5 border-t">
                <h1 className="text-lg mx-4">Tin của bạn</h1>

                <Link
                    to="my"
                    className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md mx-2 cursor-pointer"
                >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-200">
                        <Plus css="w-5 h-5 text-black" />
                    </div>
                    <h2 className="m-0" style={{ fontSize: "15px" }}>
                        Thêm vào tin
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default NavigateMain;
