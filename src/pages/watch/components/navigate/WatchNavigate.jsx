import React from "react";

import { Setting } from "../../../../components/icons";
import WatchContent from "../content__navigate/WatchContent";

const WatchNavigate = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-between items-center px-4 mt-3">
                    <h2 className="text-2xl font-bold m-0">Watch</h2>
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                        <Setting css="w-6 h-6" />
                    </div>
                </div>

                <WatchContent />

                <div className="py-2.5 border-t">
                    <div className="flex items-center justify-between ml-4">
                        <h1 className="m-0" style={{ fontSize: "17px" }}>
                            Danh sách xem của bạn
                        </h1>
                        <div className="py-1.5 px-3 mr-2 rounded-md cursor-pointer hover:bg-gray-100">
                            <span
                                className="text-blue-600"
                                style={{ fontSize: "15px" }}
                            >
                                Quản lý
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchNavigate;
