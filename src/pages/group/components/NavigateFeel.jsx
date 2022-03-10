import React from "react";
import { Link } from "react-router-dom";

import { Setting, Plus } from "../../../components/icons";
import image from "../../../assets/img/stories1.jpg";

const NavigateFeel = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center px-4 mt-4">
                <h2 className="text-2xl font-bold m-0">Nhóm</h2>
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                    <Setting css="w-6 h-6" />
                </div>
            </div>

            <div className="flex items-center gap-3 p-1.5 bg-blue-50 rounded-md mt-4 mb-2.5 mx-2">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <i
                        data-visualcompletion="css-img"
                        className="hu5pjgll eb18blue"
                        style={{
                            backgroundImage:
                                "url('https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/TpmAno71g1z.png')",
                            backgroundPosition: "0px -732px",
                            backgroundSize: "33px 921px",
                            width: "20px",
                            height: "20px",
                            backgroundRepeat: "no-repeat",
                            display: "inline-block",
                        }}
                    ></i>
                </div>
                <h2 className="m-0" style={{ fontSize: "16px" }}>
                    Bảng tin của bạn
                </h2>
            </div>

            <Link
                to="/groups/create"
                className="flex items-center justify-center gap-3 p-2 bg-blue-50 rounded-md mt-4 mx-2 cursor-pointer hover:bg-blue-100"
            >
                <Plus css="h-5 w-5 text-blue-500" />
                <span
                    style={{ fontSize: "16px", fontWeight: 500 }}
                    className="text-blue-500"
                >
                    Tạo nhóm mới
                </span>
            </Link>

            <div
                className="bg-gray-500 mt-2 my-3 mx-auto"
                style={{ height: "0.5px", width: "calc(100% - 16px)" }}
            ></div>

            <div className="px-2 w-full">
                <h2 className="text-lg font-semibold mb-4">
                    Nhóm do bạn quản lý
                </h2>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 rounded-md w-full p-2 hover:bg-gray-100">
                        <div className="h-16 w-16 overflow-hidden border rounded-md">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="text-base font-medium">
                            Hội đồng phê Việt Nam
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-md w-full p-2 hover:bg-gray-100">
                        <div className="h-16 w-16 overflow-hidden border rounded-md">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="text-base font-medium">
                            Hội đồng phê Việt Nam
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="bg-gray-500 mt-2 my-3 mx-auto"
                style={{ height: "0.5px", width: "calc(100% - 16px)" }}
            ></div>

            <div className="px-2 w-full">
                <h2 className="text-lg font-semibold mb-4">
                    Nhóm bạn đã tham gia
                </h2>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 rounded-md w-full p-2 hover:bg-gray-100">
                        <div className="h-16 w-16 overflow-hidden border rounded-md">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="text-base font-medium">
                            Hội đồng phê Việt Nam
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-md w-full p-2 hover:bg-gray-100">
                        <div className="h-16 w-16 overflow-hidden border rounded-md">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="text-base font-medium">
                            Hội đồng phê Việt Nam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigateFeel;
